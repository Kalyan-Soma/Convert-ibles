package com.currencyconverter.currencyconverter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaRedirectController {

    /**
     * Catch all route that does not contain a dot (.) to distinguish it from static
     * resources.
     * It forwards every request to the root URL ("/"), letting the SPA handle the
     * routing.
     * 
     * @return A forward directive to the root URL ("/").
     */
    @RequestMapping(value = "/**/{path:[^\\.]*}")
    public String redirectToIndex() {
        return "forward:/";
    }
}
