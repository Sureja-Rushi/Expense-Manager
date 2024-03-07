package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.entity.Transaction;

import java.util.Date;
import java.util.List;

public interface TransactionService {
    public List<Transaction> getAllTransactions();

    public Transaction getTransactionById(String accountId, String transactionId);

    public List<Transaction> getTransactionsByAccount(String accountId);

    public Transaction addTransaction(String accountId, Transaction transaction);

    public Transaction updateTransaction(String accountId, String transactionId, Transaction transaction);

    public boolean deleteTransaction(String accountId, String transactionId);

    public List<Transaction> getTransactionByDate(String accountId, Date transactionDate);

}
