package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;

import java.util.List;

public interface AccountService {

    public Account createAccount(String userId, Account account);

    public Account updateAccount(String userId, String accountId, Account account);

    public List<Account> getAllAccounts();

    public List<Account> getAccountsByUser(String userId);

    public Account getAccountById(String userId, String accountId);

    public boolean deleteAccount(String userId, String accountId);

}
