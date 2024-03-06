package com.currencyconverter.currencyconverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

import java.util.Collections;
import java.util.Map;
import java.util.Set;

@Service
public class CurrencyService {

    private final RestTemplate restTemplate;

    @Value("${currency.api.url}")
    private String apiUrl;

    @Autowired
    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public double convertCurrency(double amount, String sourceCurrency, String targetCurrency) {
        String urlWithParams = apiUrl + "&base_currency=" + sourceCurrency + "&target_currency=" + targetCurrency;

        // Make an HTTP GET request to the API endpoint
        ExchangeRateResponse response = restTemplate.getForObject(urlWithParams, ExchangeRateResponse.class);

        // Extract the exchange rates for all currencies from the API response's "data"
        // field
        Map<String, Double> exchangeRates = response.getData(); // Updated to use getData()

        // Get the exchange rate for the target currency
        double targetExchangeRate = exchangeRates.get(targetCurrency);

        // Perform currency conversion calculation
        double convertedAmount = amount * targetExchangeRate;

        return convertedAmount;
    }

    public Set<String> getAvailableCurrencies() {
        CurrencyData response = restTemplate.getForObject(apiUrl, CurrencyData.class);
        if (response != null && response.getData() != null) {
            return response.getData().keySet();
        }
        return Collections.emptySet();
    }

}
