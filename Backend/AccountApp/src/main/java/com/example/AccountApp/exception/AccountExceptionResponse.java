package com.example.AccountApp.exception;

public class AccountExceptionResponse {
    private Long id;

    public AccountExceptionResponse(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
