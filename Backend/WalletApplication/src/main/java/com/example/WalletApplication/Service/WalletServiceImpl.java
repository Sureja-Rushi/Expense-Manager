package com.example.WalletApplication.Service;

import com.example.WalletApplication.Entity.Wallet;
import com.example.WalletApplication.Repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletServiceImpl implements WalletService{

    @Autowired
    private WalletRepository walletRepository;

    @Override
    public Wallet createWallet(Wallet wallet) {
    walletRepository.save(wallet);
    return wallet;
    }

    @Override
    public Wallet updateWallet(Wallet wallet) {
        if(wallet.getId() != null){
            walletRepository.save(wallet);
        }
        return wallet;
    }

    @Override
    public List<Wallet> getAllWallet() {
        return walletRepository.findAllByOrderByPriorityAsc();
    }

    @Override
    public Wallet getWalletById(String id) {
        return walletRepository.findById(Long.parseLong((id))).orElse(null);
    }

    @Override
    public boolean deleteWallet(String id) {
        Wallet wallet = walletRepository.findById(Long.parseLong(id)).get();
        walletRepository.delete(wallet);
        return true;
    }
}
