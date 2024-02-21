package com.example.AccountApp.controller;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.service.AccountService;
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

    @GetMapping({"/{accountId}"})
    public ResponseEntity<Account> getAccountById(@PathVariable String accountId){
        Account account = accountService.getAccountById(accountId);
        if(account != null){
            return new ResponseEntity<>(account, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account){
        Account newAccount = accountService.createAccount(account);
        return new ResponseEntity<Account>(newAccount, HttpStatus.CREATED);
    }

    @PutMapping({"/{accountId}"})
    public ResponseEntity<Account> updateAccount(@PathVariable String accountId, @RequestBody Account updateAccount){
        updateAccount.setId(Long.parseLong(accountId));

        Account updated = accountService.updateAccount(updateAccount);
        if(updated != null){
            return new ResponseEntity<>(updated, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> deleteAccount(@PathVariable  String id){
        boolean deleted = accountService.deleteAccount(id);
        if(deleted){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
