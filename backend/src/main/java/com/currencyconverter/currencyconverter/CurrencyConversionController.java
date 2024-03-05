package com.currencyconverter.currencyconverter;

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
    public double convertCurrency(@RequestParam double amount,
            @RequestParam String sourceCurrency,
            @RequestParam String targetCurrency) {
        return currencyService.convertCurrency(amount, sourceCurrency, targetCurrency);
    }
}
