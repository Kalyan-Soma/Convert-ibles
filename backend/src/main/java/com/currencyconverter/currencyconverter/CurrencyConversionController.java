package com.currencyconverter.currencyconverter;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyConversionController {

    private final CurrencyService currencyService;

    @Autowired
    public CurrencyConversionController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping("/convert")
    public Map<String, Double> convertCurrency(@RequestParam double amount, @RequestParam String sourceCurrency,
            @RequestParam String targetCurrency) {
        double convertedAmount = currencyService.convertCurrency(amount, sourceCurrency, targetCurrency);
        return Collections.singletonMap("convertedAmount", convertedAmount);
    }
}
