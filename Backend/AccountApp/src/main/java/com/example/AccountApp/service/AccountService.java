package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;

import java.util.List;

public interface AccountService {

    public Account createAccount(Account account);

    public Account updateAccount(Account account);

    public List<Account> getAllAccounts();

    public Account getAccountById(String id);

    public boolean deleteAccount(String id);

}
