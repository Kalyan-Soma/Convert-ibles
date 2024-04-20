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
        Map<String, Double> kgConversions = new HashMap<>();
        kgConversions.put("g", 1000.0);
        kgConversions.put("lb", 2.20462);
        kgConversions.put("oz", 35.274);
        rates.put("kg", kgConversions);

        Map<String, Double> gConversions = new HashMap<>();
        gConversions.put("kg", 0.001);
        gConversions.put("lb", 0.00220462);
        gConversions.put("oz", 0.035274);
        rates.put("g", gConversions);

        Map<String, Double> lbConversions = new HashMap<>();
        lbConversions.put("kg", 0.453592);
        lbConversions.put("g", 453.592);
        lbConversions.put("oz", 16.0);
        rates.put("lb", lbConversions);

        Map<String, Double> ozConversions = new HashMap<>();
        ozConversions.put("kg", 0.0283495);
        ozConversions.put("g", 28.3495);
        ozConversions.put("lb", 0.0625);
        rates.put("oz", ozConversions);

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
