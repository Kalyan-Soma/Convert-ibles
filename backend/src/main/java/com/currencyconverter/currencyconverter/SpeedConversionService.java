package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class SpeedConversionService {

    private static final Logger log = LoggerFactory.getLogger(SpeedConversionService.class);
    private static final Map<String, Map<String, Double>> conversionRates = initConversionRates();

    private static Map<String, Map<String, Double>> initConversionRates() {
        Map<String, Map<String, Double>> rates = new HashMap<>();
        rates.put("km/h", new HashMap<String, Double>() {
            {
                put("mph", 0.621371);
                put("m/s", 0.277778);
            }
        });
        rates.put("mph", new HashMap<String, Double>() {
            {
                put("km/h", 1.60934);
                put("m/s", 0.44704);
            }
        });
        rates.put("m/s", new HashMap<String, Double>() {
            {
                put("km/h", 3.6);
                put("mph", 2.23694);
            }
        });
        return rates;
    }

    public Set<String> getAvailableSpeedUnits() {
        log.info("Fetching available speed units.");
        return conversionRates.keySet();
    }

    public double convertSpeed(double amount, String sourceUnit, String targetUnit) {
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
            log.error("Exception during speed conversion: ", e);
            throw new RuntimeException("Error during speed conversion", e);
        }
    }
}
