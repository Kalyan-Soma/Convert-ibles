package com.currencyconverter.currencyconverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

@RestController
public class ConversionController {

    private final CurrencyService currencyService;
    private final WeightConversionService weightConversionService;

    @Autowired
    public ConversionController(CurrencyService currencyService, WeightConversionService weightConversionService) {
        this.currencyService = currencyService;
        this.weightConversionService = weightConversionService;
    }

    @GetMapping("/convert/currency")
    public Map<String, Double> convertCurrency(@RequestParam @Min(0) double amount,
            @RequestParam @NotBlank String sourceCurrency,
            @RequestParam @NotBlank String targetCurrency) {
        double convertedAmount = currencyService.convertCurrency(amount, sourceCurrency, targetCurrency);
        return Collections.singletonMap("convertedAmount", convertedAmount);
    }

    @GetMapping("/convert/weight")
    public ResponseEntity<?> convertWeight(@RequestParam double amount,
            @RequestParam @NotBlank String sourceUnit,
            @RequestParam @NotBlank String targetUnit) {
        try {
            double convertedAmount = weightConversionService.convertWeight(amount, sourceUnit, targetUnit);
            return ResponseEntity.ok(Collections.singletonMap("convertedAmount", convertedAmount));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in conversion: " + e.getMessage());
        }
    }

    @GetMapping("/currencies")
    public ResponseEntity<Set<String>> getAvailableCurrencies() {
        try {
            Set<String> currencies = currencyService.getAvailableCurrencies();
            return new ResponseEntity<>(currencies, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Failed to fetch available currencies: " + e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching currencies", e);
        }
    }
}
