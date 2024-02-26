package com.example.AccountApp.controller;


import com.example.AccountApp.entity.Transaction;
import com.example.AccountApp.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping({"/", ""})
    public ResponseEntity<List<Transaction>> getAllTransactions(){
        List<Transaction> transactions = transactionService.getAllTransactions();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping({"/{accountId}/","/{accountId}"})
    public ResponseEntity<List<Transaction>> getTransactionsByAccount(@PathVariable String accountId){
        List<Transaction> transactions = transactionService.getTransactionsByAccount(accountId);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @PostMapping({"/{accountId}/","/{accountId}"})
    public ResponseEntity<Transaction> addTransaction(@PathVariable String accountId, @RequestBody Transaction transaction){
        Transaction newTransaction = transactionService.addTransaction(accountId, transaction);
        return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
    }

}
