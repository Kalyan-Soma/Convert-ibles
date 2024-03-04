package com.currencyconverter.currencyconverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class CurrencyService {

    private final RestTemplate restTemplate;
    private static final String API_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S4CLk7iNPhAiA8dlHBVQjX1Zf0knyU3EyQORaoX5";

    @Autowired
    public CurrencyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public double convertCurrency(double amount, String sourceCurrency, String targetCurrency) {
        // Make an HTTP GET request to the API endpoint
        ExchangeRateResponse response = restTemplate.getForObject(API_URL, ExchangeRateResponse.class);

        // Extract the exchange rates for all currencies from the API response
        Map<String, Double> exchangeRates = response.getRates();

        // Get the exchange rate for the target currency
        double targetExchangeRate = exchangeRates.get(targetCurrency);

        // Perform currency conversion calculation
        double convertedAmount = amount * targetExchangeRate;

        return convertedAmount;
    }
}
