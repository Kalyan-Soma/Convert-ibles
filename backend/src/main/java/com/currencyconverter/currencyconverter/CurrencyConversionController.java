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
public class CurrencyConversionController {

    private final CurrencyService currencyService;

    @Autowired
    public CurrencyConversionController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @GetMapping("/convert")
    public Map<String, Double> convertCurrency(@RequestParam @Min(0) double amount,
                                               @RequestParam @NotBlank String sourceCurrency,
                                               @RequestParam @NotBlank String targetCurrency) {
        double convertedAmount = currencyService.convertCurrency(amount, sourceCurrency, targetCurrency);
        return Collections.singletonMap("convertedAmount", convertedAmount);
    }

    @GetMapping("/currencies")
    public ResponseEntity<Set<String>> getAvailableCurrencies() {
        try {
            Set<String> currencies = currencyService.getAvailableCurrencies();
            return new ResponseEntity<>(currencies, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception here as per your logging setup.
            // For example:
            System.out.println("Failed to fetch available currencies: " + e.getMessage());

            // Respond with a '500 Internal Server Error' and a message
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching currencies", e);
        }
    }

    // Weight Conversion Endpoints

    @GetMapping("/convertWeight")
    public Map<String, Double> convertWeight(@RequestParam @Min(0) double amount,
                                             @RequestParam @NotBlank String sourceUnit,
                                             @RequestParam @NotBlank String targetUnit) {
        double convertedWeight = currencyService.convertWeight(amount, sourceUnit, targetUnit);
        return Collections.singletonMap("convertedWeight", convertedWeight);
    }

    @GetMapping("/units")
    public ResponseEntity<Set<String>> getAvailableUnits() {
        try {
<<<<<<< Updated upstream
            Set<String> units = currencyService.getAvailableUnits();
=======
            Set<String> units = currencyService.getAvailableWeightUnits();
>>>>>>> Stashed changes
            return new ResponseEntity<>(units, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception here as per your logging setup.
            // For example:
<<<<<<< Updated upstream
            System.out.println("Failed to fetch available units: " + e.getMessage());

            // Respond with a '500 Internal Server Error' and a message
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching units", e);
        }
    }
}
=======
            System.out.println("Failed to fetch available weight units: " + e.getMessage());

            // Respond with a '500 Internal Server Error' and a message
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching weight units", e);
        }
    }
}
>>>>>>> Stashed changes
