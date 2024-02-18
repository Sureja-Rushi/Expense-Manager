package com.example.WalletApplication.Service;

import com.example.WalletApplication.Entity.Wallet;

import java.util.List;

public interface WalletService {

    public Wallet createWallet(Wallet wallet);

    public Wallet updateWallet(Wallet wallet);

    public List<Wallet> getAllWallet();

    public Wallet getWalletById(String id);

    public boolean deleteWallet(String id);

}
