package com.example.AccountApp.controller;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.service.AccountService;
import com.example.AccountApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping({"/", ""})
    public ResponseEntity<List<Account>> getAccounts(){
        List<Account> acccounts =  accountService.getAllAccounts();
        return new ResponseEntity<>(acccounts, HttpStatus.OK);
    }

    @GetMapping({"/{userId}/", "/{userId}"})
    public ResponseEntity<List<Account>> getAccountsByUser(@PathVariable String userId){
        List<Account> accounts = accountService.getAccountsByUser(userId);
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }

    @GetMapping({"/{userId}/{accountId}","/{userId}/{accountId}/" })
    public ResponseEntity<Account> getAccountById(@PathVariable String userId, @PathVariable String accountId){
        Account account = accountService.getAccountById(userId, accountId);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @PostMapping({"/{userId}/","/{userId}"})
    public ResponseEntity<Account> createAccount(@PathVariable String userId, @RequestBody Account account){
        Account newAccount = accountService.createAccount(userId, account);
        return new ResponseEntity<Account>(newAccount, HttpStatus.CREATED);
    }

    @PutMapping({"/{userId}/{accountId}/","/{userId}/{accountId}"})
    public ResponseEntity<Account> updateAccount(@PathVariable String userId, @PathVariable String accountId, @RequestBody Account updateAccount){
        Account updatedAccount = accountService.updateAccount(userId, accountId, updateAccount);
        return new ResponseEntity<>(updatedAccount, HttpStatus.OK);
    }

    @DeleteMapping({"/{userId}/{accountId}/","/{userId}/{accountId}"})
    public ResponseEntity<String> deleteAccount(@PathVariable String userId, @PathVariable  String accountId){
        try{
            boolean deleted = accountService.deleteAccount(userId, accountId);
            if(deleted){
                return new ResponseEntity<>("Account deleted successfully...",HttpStatus.OK);
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return new ResponseEntity<>("Deleted fail...",HttpStatus.NOT_FOUND);
    }

}
