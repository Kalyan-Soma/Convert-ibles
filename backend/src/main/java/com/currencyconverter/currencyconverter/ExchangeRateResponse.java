package com.currencyconverter.currencyconverter;

import java.util.Map;

public class ExchangeRateResponse {

    private Map<String, Double> data; // This matches the "data" field in the JSON response

    // Getter for data
    public Map<String, Double> getData() {
        return data;
    }

    // Setter for data
    public void setData(Map<String, Double> data) {
        this.data = data;
    }
}
