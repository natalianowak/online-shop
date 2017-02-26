package app;


import domain.Product;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ShopRestController {

    @RequestMapping(value = "/products", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> products() {
        List<Product> result = new ArrayList<>();
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:test.db");

            stmt = c.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM PRODUCT;");
            while (rs.next()) {
                result.add(new Product(rs.getInt("id"), rs.getString("nazwa"), rs.getString("producent"), rs.getInt("cena")));
            }
            rs.close();
            stmt.close();
            c.close();

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return result;
    }
}
