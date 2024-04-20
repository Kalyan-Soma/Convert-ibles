package com.currencyconverter.currencyconverter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
public class LengthConversionService {

    private static final Logger log = LoggerFactory.getLogger(LengthConversionService.class);
    private static final Map<String, Map<String, Double>> conversionRates = initConversionRates();

    private static Map<String, Map<String, Double>> initConversionRates() {
        Map<String, Map<String, Double>> rates = new HashMap<>();
        Map<String, Double> mConversions = new HashMap<>();
        mConversions.put("cm", 100.0);
        mConversions.put("in", 39.3701);
        mConversions.put("ft", 3.28084);
        rates.put("m", mConversions);

        Map<String, Double> cmConversions = new HashMap<>();
        cmConversions.put("m", 0.01);
        cmConversions.put("in", 0.393701);
        cmConversions.put("ft", 0.0328084);
        rates.put("cm", cmConversions);

        Map<String, Double> inConversions = new HashMap<>();
        inConversions.put("m", 0.0254);
        inConversions.put("cm", 2.54);
        inConversions.put("ft", 1.0 / 12);
        rates.put("in", inConversions);

        Map<String, Double> ftConversions = new HashMap<>();
        ftConversions.put("m", 0.3048);
        ftConversions.put("cm", 30.48);
        ftConversions.put("in", 12.0);
        rates.put("ft", ftConversions);

        return rates;
    }

    public Set<String> getAvailableLengthUnits() {
        log.info("Fetching available length units.");
        return conversionRates.keySet();
    }

    public double convertLength(double amount, String sourceUnit, String targetUnit) {
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
            log.error("Exception during length conversion: ", e);
            throw new RuntimeException("Error during length conversion", e);
        }
    }
}
