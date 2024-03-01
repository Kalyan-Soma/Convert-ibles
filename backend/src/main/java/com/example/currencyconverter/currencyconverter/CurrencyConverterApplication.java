package com.example.currencyconverter.currencyconverter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CurrencyConverterApplication {

	private static final String Hello = null;

    public static void main(String[] args) {
		SpringApplication.run(CurrencyConverterApplication.class, args);
        System.out.println("Hello");
        return;
	}

}
