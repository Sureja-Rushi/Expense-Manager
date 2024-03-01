package com.example.AccountApp.repository;

import com.example.AccountApp.entity.Account;
import com.example.AccountApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findAllByOrderByPriorityAsc();
    List<Account> findByUserOrderByPriorityAsc(User user);
    List<Account> findByUser(User user);
}
