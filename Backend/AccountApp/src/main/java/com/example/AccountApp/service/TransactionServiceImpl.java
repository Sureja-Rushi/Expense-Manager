package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.entity.Transaction;
import com.example.AccountApp.repository.AccountRepository;
import com.example.AccountApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private AccountRepository accountRepository;


    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public List<Transaction> getTransactionsByAccount(String accountId) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            return transactionRepository.findByAccount(account.get());
        }
        else{
            return null;
        }
    }

    @Override
    public Transaction addTransaction(String accountId, Transaction transaction) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            transaction.setAccount(account.get());
            transactionRepository.save(transaction);
            return transaction;
        }
        else{
            return null;
        }
    }
}
