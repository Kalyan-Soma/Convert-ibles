package com.currencyconverter.currencyconverter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SpaRedirectController {

    @RequestMapping(value = "/**/{path:[^\\.]*}")
    public String redirectToIndex() {
        return "forward:/";
    }
}
