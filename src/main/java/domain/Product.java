package domain;

/**
 * Created by kuba on 2/25/2017.
 */
public class Product {
    private int id;
    private String nazwa;
    private String producent;
    private int cena;

    public Product(int id, String nazwa, String producent, int cena) {
        this.id = id;
        this.nazwa = nazwa;
        this.producent = producent;
        this.cena = cena;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getProducent() {
        return producent;
    }

    public void setProducent(String producent) {
        this.producent = producent;
    }

    public int getCena() {
        return cena;
    }

    public void setCena(int cena) {
        this.cena = cena;
    }
}
