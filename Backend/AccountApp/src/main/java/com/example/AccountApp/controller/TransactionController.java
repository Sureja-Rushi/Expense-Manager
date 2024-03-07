package com.example.AccountApp.controller;


import com.example.AccountApp.entity.Transaction;
import com.example.AccountApp.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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


    @GetMapping({"/{accountId}/{transactionId}/", "/{accountId}/{transactionId}" })
    public ResponseEntity<Transaction> getTransactionById(@PathVariable String accountId, @PathVariable String transactionId){
        Transaction transaction = transactionService.getTransactionById(accountId, transactionId);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @PostMapping({"/{accountId}/","/{accountId}"})
    public ResponseEntity<Transaction> addTransaction(@PathVariable String accountId, @RequestBody Transaction transaction){
        Transaction newTransaction = transactionService.addTransaction(accountId, transaction);
        return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
    }

    @PutMapping({"/{accountId}/{transactionId}/", "/{accountId}/{transactionId}" })
    public ResponseEntity<Transaction> updateTransaction(@PathVariable String accountId, @PathVariable String transactionId, @RequestBody Transaction transaction){
        Transaction updatedTransaction = transactionService.updateTransaction(accountId, transactionId, transaction);
        return new ResponseEntity<>(updatedTransaction, HttpStatus.OK);
    }

    @DeleteMapping({"/{accountId}/{transactionId}/", "/{accountId}/{transactionId}" })
    public ResponseEntity<String> deleteTransaction(@PathVariable String accountId, @PathVariable String transactionId){
        try{
            boolean deleted = transactionService.deleteTransaction(accountId, transactionId);
            System.out.println(deleted);
            if(deleted){
                return new ResponseEntity<>("Transaction deleted successfully...",HttpStatus.NO_CONTENT);
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return new ResponseEntity<>("Deleted fail...",HttpStatus.NOT_FOUND);
    }



}
