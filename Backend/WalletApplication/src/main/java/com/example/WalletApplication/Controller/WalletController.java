package com.example.WalletApplication.Controller;

import com.example.WalletApplication.Entity.Wallet;
import com.example.WalletApplication.Service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    private WalletService walletService;

    @GetMapping({"/", ""})
    public ResponseEntity<List<Wallet>> getWallets(){
        List<Wallet> wallet =  walletService.getAllWallet();
        return new ResponseEntity<>(wallet, HttpStatus.OK);
    }

    @GetMapping({"/{walletId}"})
    public ResponseEntity<Wallet> getWalletById(@PathVariable String walletId){
        Wallet wallet = walletService.getWalletById(walletId);
        if(wallet != null){
            return new ResponseEntity<>(wallet, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Wallet> createWallet(@RequestBody Wallet wallet){
        Wallet newWallet = walletService.createWallet(wallet);
        return new ResponseEntity<Wallet>(newWallet, HttpStatus.CREATED);
    }

    @PutMapping({"/{walletId}"})
    public ResponseEntity<Wallet> updateWallet(@PathVariable String walletId, @RequestBody Wallet updateWallet){
        updateWallet.setId(Long.parseLong(walletId));

        Wallet updated = walletService.updateWallet(updateWallet);
        if(updated != null){
            return new ResponseEntity<>(updated, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> deleteWallet(@PathVariable  String id){
        boolean deleted = walletService.deleteWallet(id);
        if(deleted){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
