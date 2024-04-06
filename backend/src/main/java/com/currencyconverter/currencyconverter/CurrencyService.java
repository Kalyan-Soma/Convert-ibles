package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.Arrays;
import java.util.List;
import java.util.HashSet;

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

    public Set<String> getAvailableUnits() {
        // This method should return a set of available weight units
        // Implement the logic to fetch available units from your data source or define them statically
        return new HashSet<>(Arrays.asList("kg", "g", "lb", "oz"));
    }

    // Weight Conversion Service
    public double convertWeight(double amount, String sourceUnit, String targetUnit) {
        // Ensure source and target units are valid
        if (!isValidUnit(sourceUnit) || !isValidUnit(targetUnit)) {
            throw new IllegalArgumentException("Invalid source or target unit");
        }

        // Convert to a common base unit (kilograms)
        double amountInKg = convertToKg(amount, sourceUnit);

        // Convert from kilograms to the target unit
        return convertFromKg(amountInKg, targetUnit);
    }

    private double convertToKg(double amount, String sourceUnit) {
        switch (sourceUnit.toLowerCase()) {
            case "kg":
                return amount;
            case "g":
                return amount / 1000; // 1 gram = 0.001 kilograms
            case "lb":
                return amount * 0.453592; // 1 pound = 0.453592 kilograms
            case "oz":
                return amount * 0.0283495; // 1 ounce = 0.0283495 kilograms
            default:
                throw new IllegalArgumentException("Unsupported source unit: " + sourceUnit);
        }
    }

    private double convertFromKg(double amountInKg, String targetUnit) {
        switch (targetUnit.toLowerCase()) {
            case "kg":
                return amountInKg;
            case "g":
                return amountInKg * 1000; // 1 kilogram = 1000 grams
            case "lb":
                return amountInKg / 0.453592; // 1 kilogram = 2.20462 pounds
            case "oz":
                return amountInKg / 0.0283495; // 1 kilogram = 35.274 ounces
            default:
                throw new IllegalArgumentException("Unsupported target unit: " + targetUnit);
        }
    }

    private boolean isValidUnit(String unit) {
        // List of supported units
        List<String> validUnits = Arrays.asList("kg", "g", "lb", "oz");
        return validUnits.contains(unit.toLowerCase());
    }
}
