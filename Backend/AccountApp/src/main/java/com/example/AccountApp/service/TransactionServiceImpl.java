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
        return transactionRepository.findAllByOrderByTransactionDateDesc();
    }

    @Override
    public Transaction getTransactionById(String accountId, String transactionId) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            Account existingAccount = account.get();

            for (Transaction transaction : existingAccount.getTransactions()) {
                if (transaction.getId().equals(Long.parseLong(transactionId))) {
                    return transaction;
                }
            }
        }
        return null;
    }

    @Override
    public List<Transaction> getTransactionsByAccount(String accountId) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            return transactionRepository.findByAccountOrderByTransactionDateDesc(account.get());
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

    @Override
    public Transaction updateTransaction(String accountId, String transactionId, Transaction transaction) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            Account existingAccount = account.get();

            for (Transaction transactions : existingAccount.getTransactions()) {
                if (transactions.getId().equals(Long.parseLong(transactionId))) {
                    transaction.setId(Long.parseLong(transactionId));
//                    transaction.setTransactionDate(transactions.getTransactionDate());
                    transaction.setAccount(account.get());
                    return transactionRepository.save(transaction);
                }
            }
        }
        return null;
    }

    @Override
    public boolean deleteTransaction(String accountId, String transactionId) {
        Optional<Account> account = accountRepository.findById(Long.parseLong(accountId));
        if(account.isPresent()){
            List<Transaction> transactions = transactionRepository.findByAccount(account.get());
            for(Transaction transaction : transactions ){
                if(transaction.getId() == (Long.parseLong(transactionId))){
                    transactionRepository.delete(transaction);
                    return true;
                }
            }
        }
        return false;
    }
}
