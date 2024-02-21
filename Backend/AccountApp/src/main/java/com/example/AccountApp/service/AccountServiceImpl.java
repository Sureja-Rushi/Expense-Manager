package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;
    @Override
    public Account createAccount(Account account) {
//        Account newAccount = new Account();
        accountRepository.save(account);
        return account;
    }

    @Override
    public Account updateAccount(Account account) {
        if(account.getId() != null){
            accountRepository.save(account);
        }
        return account;
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAllByOrderByPriorityAsc();
    }

    @Override
    public Account getAccountById(String id) {
        return accountRepository.findById(Long.parseLong((id))).orElse(null);
    }

    @Override
    public boolean deleteAccount(String id) {

        Account account = accountRepository.findById(Long.parseLong(id)).get();
        accountRepository.delete(account);
        return true;
    }
}
