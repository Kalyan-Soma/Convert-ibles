package com.currencyconverter.currencyconverter;

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
            Map<String, Object> apiResponse = restTemplate.getForObject(apiUrl, Map.class);
            if (apiResponse == null || !apiResponse.containsKey("data")) {
                // Log an error or throw a custom exception
                throw new RuntimeException("API response is invalid or does not contain 'data'.");
            }
            Map<String, Double> currencyData = (Map<String, Double>) apiResponse.get("data");
            return currencyData.keySet();
        } catch (RestClientException e) {
            // Log this exception with a logging framework or simple print statement
            // For production, use a logger to log this error
            System.out.println("Exception when fetching currencies: " + e.getMessage());
            // Consider returning a custom error response or throw a custom exception
            return Collections.emptySet();
        }
    }
}
