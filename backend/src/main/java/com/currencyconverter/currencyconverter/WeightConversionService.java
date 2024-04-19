package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class WeightConversionService {

    private static final Logger log = LoggerFactory.getLogger(WeightConversionService.class);
    private static final Map<String, Map<String, Double>> conversionRates = initConversionRates();

    private static Map<String, Map<String, Double>> initConversionRates() {
        Map<String, Map<String, Double>> rates = new HashMap<>();
        rates.put("kg", Map.of("g", 1000.0, "lb", 2.20462, "oz", 35.274));
        rates.put("g", Map.of("kg", 0.001, "lb", 0.00220462, "oz", 0.035274));
        rates.put("lb", Map.of("kg", 0.453592, "g", 453.592, "oz", 16.0));
        rates.put("oz", Map.of("kg", 0.0283495, "g", 28.3495, "lb", 0.0625));
        return rates;
    }

    public Set<String> getAvailableWeightUnits() {
        log.info("Fetching available weight units.");
        return conversionRates.keySet();
    }

    public double convertWeight(double amount, String sourceUnit, String targetUnit) {
        try {
            log.info("Requesting conversion from {} to {} with amount {}", sourceUnit, targetUnit, amount);
            if (!conversionRates.containsKey(sourceUnit) || !conversionRates.get(sourceUnit).containsKey(targetUnit)) {
                log.error("Conversion from {} to {} is not supported.", sourceUnit, targetUnit);
                throw new IllegalArgumentException(
                        "Conversion from " + sourceUnit + " to " + targetUnit + " is not supported.");
            }
            double conversionRate = conversionRates.get(sourceUnit).get(targetUnit);
            double convertedAmount = amount * conversionRate;
            log.info("Converted amount: {}", convertedAmount);
            return convertedAmount;
        } catch (Exception e) {
            log.error("Exception during weight conversion: ", e);
            throw new RuntimeException("Error during weight conversion", e);
        }
    }
}
