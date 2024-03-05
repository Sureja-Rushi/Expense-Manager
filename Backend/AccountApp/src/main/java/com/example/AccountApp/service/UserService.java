package com.example.AccountApp.service;

import com.example.AccountApp.entity.User;

import java.util.List;

public interface UserService {
    public User createUser(User user);

    public List<User> getAllUsers();

    public User getUserById(String userId);
    public Long authenticate(String email, String password);
}
