package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.entity.Transaction;

import java.util.List;

public interface TransactionService {
    public List<Transaction> getAllTransactions();

    public List<Transaction> getTransactionsByAccount(String accountId);

    public Transaction addTransaction(String accountId, Transaction transaction);
}
