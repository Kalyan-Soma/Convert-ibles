package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

@Service
public class CurrencyService {

    private static final Logger log = LoggerFactory.getLogger(CurrencyService.class);
    private final RestTemplate restTemplate = new RestTemplate();
    private final String apiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

    public Set<String> getAvailableCurrencies() {
        try {
            String url = apiUrl + "/currencies.json";
            log.info("Fetching currencies from API URL: {}", url);

            Map<String, String> apiResponse = restTemplate.getForObject(url, Map.class);

            if (apiResponse != null) {
                return apiResponse.keySet();
            } else {
                log.error("API response is null");
                return Collections.emptySet();
            }
        } catch (Exception e) {
            log.error("Exception when fetching currencies: ", e);
            return Collections.emptySet();
        }
    }

    public double convertCurrency(double amount, String sourceCurrency, String targetCurrency) {
        try {
            // Construct the URL with the selected source currency
            String urlWithParams = apiUrl + "/currencies/" + sourceCurrency + ".json";
            log.info("Converting currency from {} to {} using API URL: {}", sourceCurrency, targetCurrency,
                    urlWithParams);

            ResponseEntity<Map> response = restTemplate.getForEntity(urlWithParams, Map.class);
            if (response.getBody() == null || !response.getBody().containsKey(sourceCurrency)) {
                throw new RuntimeException("Source currency rates are missing in the response");
            }

            Map<String, Object> currencyRates = (Map<String, Object>) response.getBody().get(sourceCurrency);
            Double targetRate = Double.valueOf(currencyRates.get(targetCurrency).toString());

            if (targetRate == null) {
                throw new RuntimeException("Target currency exchange rate not found");
            }

            return amount * targetRate;
        } catch (Exception e) {
            log.error("Exception when converting currency: ", e);
            throw new RuntimeException("Error converting currency", e);
        }
    }

}
