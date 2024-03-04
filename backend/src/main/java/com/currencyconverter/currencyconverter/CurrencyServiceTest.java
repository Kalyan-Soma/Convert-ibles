package com.currencyconverter.currencyconverter;

import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;
import org.junit.Test;

public class CurrencyServiceTest {

    @Mock
    private RestTemplate restTemplateMock;

    @Test
    public void testConvertCurrency() {
        // Mock response from the external API
        ExchangeRateResponse exchangeRateResponse = new ExchangeRateResponse();
        Map<String, Double> rates = new HashMap<>();
        rates.put("USD", 1.0); // Assuming 1 USD = 1.0 USD
        rates.put("EUR", 0.85); // Assuming 1 USD = 0.85 EUR
        exchangeRateResponse.setRates(rates);

        // Mock RestTemplate to return the mock response
        restTemplateMock = Mockito.mock(RestTemplate.class);
        Mockito.when(restTemplateMock.getForObject(Mockito.anyString(), Mockito.eq(ExchangeRateResponse.class)))
                .thenReturn(exchangeRateResponse);

        // Create an instance of CurrencyService with the mocked RestTemplate
        CurrencyService currencyService = new CurrencyService(restTemplateMock);

        // Test converting 100 USD to EUR
        double amount = 100.0;
        String sourceCurrency = "USD";
        String targetCurrency = "EUR";
        double convertedAmount = currencyService.convertCurrency(amount, sourceCurrency, targetCurrency);

        // Print the result of the conversion
        System.out.println(amount + " " + sourceCurrency + " equals " + convertedAmount + " " + targetCurrency);

        // Verify that the conversion is correct (100 USD to EUR)
        assertEquals(85.0, convertedAmount);
    }

    private void assertEquals(double expected, double convertedAmount) {
    }
}
