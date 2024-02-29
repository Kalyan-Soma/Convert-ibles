import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class API {
    public static void main(String[] args) {
        //String accessKey = "S4CLk7iNPhAiA8dlHBVQjX1Zf0knyU3EyQORaoX5";
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S4CLk7iNPhAiA8dlHBVQjX1Zf0knyU3EyQORaoX5"))
                .build();

        try {
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Response code: " + response.statusCode());
            System.out.println("Response body: " + response.body());
        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
