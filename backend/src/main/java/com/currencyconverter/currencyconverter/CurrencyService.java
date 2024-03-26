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
import java.util.stream.Collectors;

@Service
public class CurrencyService {

    private static final Logger log = LoggerFactory.getLogger(CurrencyService.class);
    private final RestTemplate restTemplate;

    @Value("${CURRENCY_API_URL}")
    private String apiUrl;

    @Autowired
    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Set<String> getAvailableCurrencies() {
        try {
            log.info("Fetching currencies from API URL: {}", apiUrl);

            Map<String, Object> apiResponse = restTemplate.getForObject(apiUrl, Map.class);

            log.info("Raw API response: {}", apiResponse);

            if (apiResponse == null || !apiResponse.containsKey("data")) {
                log.error("API response is invalid or does not contain 'data'. Response: {}", apiResponse);
                throw new RuntimeException("API response is invalid or does not contain 'data'.");
            }

            Map<String, Object> currencyData = (Map<String, Object>) apiResponse.get("data");

            Set<String> currencyKeys = currencyData.keySet();

            log.info("Currencies fetched: {}", currencyKeys);

            return currencyKeys;
        } catch (RestClientException e) {
            log.error("Exception when fetching currencies: ", e);
            return Collections.emptySet();
        } catch (ClassCastException e) {
            log.error("Error casting API response to expected Map<String, Object>: ", e);
            return Collections.emptySet();
        } catch (Exception e) {
            log.error("Unexpected error when fetching currencies: ", e);
            return Collections.emptySet();
        }
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
}
