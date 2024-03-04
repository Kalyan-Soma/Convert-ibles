package com.currencyconverter.currencyconverter;

import java.util.Map;

public class ExchangeRateResponse {

    private String baseCurrency;
    private Map<String, Double> rates;

// Getter for baseCurrency
public String getBaseCurrency() {
    return baseCurrency;
}

// Setter for baseCurrency
public void setBaseCurrency(String baseCurrency) {
    this.baseCurrency = baseCurrency;
}

// Getter for rates
public Map<String, Double> getRates() {
    return rates;
}

// Setter for rates
public void setRates(Map<String, Double> rates) {
    this.rates = rates;
}
}