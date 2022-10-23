package group8.bloodbank.model; /***********************************************************************
 * Module:  Address.java
 * Author:  david
 * Purpose: Defines the Class Address
 ***********************************************************************/

public class Address {
    private String country;
    private String city;
    private String street;
    private String number;


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}