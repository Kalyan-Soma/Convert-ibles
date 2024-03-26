package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.Map;
import java.util.Set;

@Service
public class CurrencyService {

    private final RestTemplate restTemplate;
    private static final Logger log = LoggerFactory.getLogger(CurrencyService.class);

    @Value("${CURRENCY_API_URL}")
    private String apiUrl;

    @Autowired
    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public double convertCurrency(double amount, String sourceCurrency, String targetCurrency) {
        String urlWithParams = apiUrl + "&base_currency=" + sourceCurrency + "&target_currency=" + targetCurrency;
        Map<String, Object> response = restTemplate.getForObject(urlWithParams, Map.class);
        if (response == null || !response.containsKey("data")) {
            throw new RuntimeException("Invalid response from currency conversion API");
        }
        Map<String, Double> exchangeRates = (Map<String, Double>) response.get("data");
        Double targetExchangeRate = exchangeRates.get(targetCurrency);
        if (targetExchangeRate == null) {
            throw new RuntimeException("Target currency exchange rate not found");
        }
        return amount * targetExchangeRate;
    }

    public Set<String> getAvailableCurrencies() {
        try {
            // Log the URL being used for the request for debugging purposes
            log.info("Fetching currencies from API URL: {}", apiUrl);

            Map<String, Object> apiResponse = restTemplate.getForObject(apiUrl, Map.class);

            // Immediately log the raw API response
            log.info("Raw API response: {}", apiResponse);

            if (apiResponse == null || !apiResponse.containsKey("data")) {
                log.error("API response is invalid or does not contain 'data'. Response: {}", apiResponse);
                throw new RuntimeException("API response is invalid or does not contain 'data'.");
            }

            @SuppressWarnings("unchecked")
            Map<String, Double> currencyData = (Map<String, Double>) apiResponse.get("data");

            // Convert the currency data keys to a Set
            Set<String> currencyKeys = currencyData.keySet();

            // Log the currencies fetched for debugging
            log.info("Currencies fetched: {}", currencyKeys);

            return currencyKeys;
        } catch (RestClientException e) {
            log.error("Exception when fetching currencies: ", e);
            return Collections.emptySet();
        } catch (ClassCastException e) {
            log.error("Error casting API response to expected Map<String, Double>: ", e);
            return Collections.emptySet();
        } catch (Exception e) {
            log.error("Unexpected error when fetching currencies: ", e);
            return Collections.emptySet();
        }
    }
}
