package com.nagarro.communitywebsite.entity;

public class AuthenticationRequest {
    private String userName;
    private String password;

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public AuthenticationRequest(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public AuthenticationRequest(){}

    @Override
    public String toString() {
        return "AuthenticationRequest{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
