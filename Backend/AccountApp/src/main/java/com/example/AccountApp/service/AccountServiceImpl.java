package com.example.AccountApp.service;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.entity.User;
import com.example.AccountApp.repository.AccountRepository;
import com.example.AccountApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Account createAccount(String userId, Account account) {
        Optional<User> user = userRepository.findById(Long.parseLong(userId));
        if(user.isPresent()){
            account.setUser(user.get());
            accountRepository.save(account);
            return account;
        }
        return null;
    }

    @Override
    public Account updateAccount(String userId, String accountId, Account account) {
       Optional<User> user = userRepository.findById(Long.parseLong(userId));
       if(user.isPresent()){
           User existingUser = user.get();

           for(Account accounts : existingUser.getAccounts()){
               if(accounts.getId().equals(Long.parseLong(accountId))){
                   account.setId(Long.parseLong(accountId));
                   account.setUser(user.get());
                   return accountRepository.save(account);
               }
           }
       }
       return null;
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAllByOrderByPriorityAsc();
    }

    @Override
    public List<Account> getAccountsByUser(String userId) {
        Optional<User> user = userRepository.findById(Long.parseLong(userId));
        if(user.isPresent()){
            return accountRepository.findByUserOrderByPriorityAsc(user.get());
        }
        else{
            return null;
        }
    }

    @Override
    public Account getAccountById(String userId, String accountId) {
        Optional<User> user = userRepository.findById(Long.parseLong(userId));
        if(user.isPresent()){
            User existingUser = user.get();
            for(Account account : existingUser.getAccounts()){
                if(account.getId().equals(Long.parseLong(accountId))){
                    return account;
                }
            }
        }
        return null;
    }

    @Override
    public boolean deleteAccount(String userId, String accountId) {
        Optional<User> user = userRepository.findById(Long.parseLong(userId));
        if(user.isPresent()){
            List<Account> accounts = accountRepository.findByUser(user.get());
            for(Account account : accounts){
                if(account.getId() == (Long.parseLong(accountId))){
                    accountRepository.delete(account);
                    return true;
                }
            }
        }
        return false;
    }
}
