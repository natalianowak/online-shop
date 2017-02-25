package app;


import domain.Product;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ShopRestController {

    @RequestMapping(value = "/products", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> products() {
        return new ArrayList<>();
    }
}
