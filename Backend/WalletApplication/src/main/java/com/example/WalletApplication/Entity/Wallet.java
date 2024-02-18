package com.example.WalletApplication.Entity;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String walletName;
    private String walletNumber;
    private String description;
    private String priority;
    private Double currentBalance;

    public Wallet() {
    }

    public Wallet(Long id, String walletName, String walletNumber, String description, String priority, Double currentBalance) {
        this.id = id;
        this.walletName = walletName;
        this.walletNumber = walletNumber;
        this.description = description;
        this.priority = priority;
        this.currentBalance = currentBalance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWalletName() {
        return walletName;
    }

    public void setWalletName(String walletName) {
        this.walletName = walletName;
    }

    public String getWalletNumber() {
        return walletNumber;
    }

    public void setWalletNumber(String walletNumber) {
        this.walletNumber = walletNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(Double currentBalance) {
        this.currentBalance = currentBalance;
    }



    @Override
    public String toString() {
        return "Wallet{" +
                "id=" + id +
                ", walletName='" + walletName + '\'' +
                ", walletNumber='" + walletNumber + '\'' +
                ", description='" + description + '\'' +
                ", priority='" + priority + '\'' +
                ", currentBalance=" + currentBalance +
                '}';
    }



    @PrePersist
    public void setCurrentBalance(){ this.currentBalance = (double) 0; }


}
