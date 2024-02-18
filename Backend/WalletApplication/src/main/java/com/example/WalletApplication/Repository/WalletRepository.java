package com.example.WalletApplication.Repository;

import com.example.WalletApplication.Entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
    List<Wallet> findAllByOrderByPriorityAsc();
}
