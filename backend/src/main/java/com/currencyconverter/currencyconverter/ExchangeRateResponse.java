package com.currencyconverter.currencyconverter;

import java.util.Map;

public class ExchangeRateResponse {

    private Map<String, Double> data;

    public Map<String, Double> getData() {
        return data;
    }

    public void setData(Map<String, Double> data) {
        this.data = data;
    }
}
