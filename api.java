import java.io.IOException;
import java.util.Scanner;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class CurrencyConverter {
    private static final String API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

    public static void main(String[] args) {
        OkHttpClient client = new OkHttpClient();
        Scanner scanner = new Scanner(System.in);

        try {
            // Fetch exchange rates from the API
            String responseBody = fetchExchangeRates(client);
            JsonObject ratesObject = JsonParser.parseString(responseBody).getAsJsonObject().getAsJsonObject("rates");

            System.out.println("Welcome to Currency Converter");
            System.out.println("Available currencies: USD, EUR, GBP");

            System.out.print("Enter the amount in USD: ");
            double amountUSD = scanner.nextDouble();

            System.out.print("Enter the target currency (EUR or GBP): ");
            String targetCurrency = scanner.next().toUpperCase();

            double exchangeRate = getExchangeRate(ratesObject, targetCurrency);
            if (exchangeRate != -1) {
                double convertedAmount = amountUSD * exchangeRate;
                System.out.printf("%.2f USD is equal to %.2f %s\n", amountUSD, convertedAmount, targetCurrency);
            } else {
                System.out.println("Invalid target currency. Please enter EUR or GBP.");
            }
        } catch (IOException e) {
            System.out.println("Error: Unable to fetch exchange rates from the API.");
        } finally {
            scanner.close();
        }
    }

    private static String fetchExchangeRates(OkHttpClient client) throws IOException {
        Request request = new Request.Builder()
                .url(API_URL)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
            return response.body().string();
        }
    }

    private static double getExchangeRate(JsonObject ratesObject, String targetCurrency) {
        try {
            return ratesObject.get(targetCurrency).getAsDouble();
        } catch (Exception e) {
            return -1; // Indicates an invalid target currency
        }
    }
}
