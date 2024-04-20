package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class AreaConversionService {

    private static final Logger log = LoggerFactory.getLogger(AreaConversionService.class);
    private static final Map<String, Map<String, Double>> conversionRates = initConversionRates();

    private static Map<String, Map<String, Double>> initConversionRates() {
        Map<String, Map<String, Double>> rates = new HashMap<>();
        rates.put("sq km", new HashMap<String, Double>() {
            {
                put("sq mi", 0.386102);
                put("sq m", 1000000.0);
            }
        });
        rates.put("sq mi", new HashMap<String, Double>() {
            {
                put("sq km", 2.58999);
                put("sq m", 2589990.0);
            }
        });
        rates.put("sq m", new HashMap<String, Double>() {
            {
                put("sq km", 0.000001);
                put("sq mi", 0.000000386102);
            }
        });
        return rates;
    }

    public Set<String> getAvailableAreaUnits() {
        log.info("Fetching available area units.");
        return conversionRates.keySet();
    }

    public double convertArea(double amount, String sourceUnit, String targetUnit) {
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
            log.error("Exception during area conversion: ", e);
            throw new RuntimeException("Error during area conversion", e);
        }
    }
}
