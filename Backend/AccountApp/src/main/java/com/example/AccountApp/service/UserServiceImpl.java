package com.example.AccountApp.service;

import com.example.AccountApp.entity.User;
import com.example.AccountApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return allUsers;
    }

    @Override
    public User getUserById(String userId) {
        return userRepository.findById(Long.parseLong(userId)).orElse(null);

    }

    @Override
    public Long authenticate(String email, String password) {
        try {
            User user = userRepository.findByEmail(email);
            if (user != null && user.getPassword().equals(password)) {
                return user.getId();
            }
        } catch (IncorrectResultSizeDataAccessException ex) {
            // Log the error or handle it as per your application's requirements
            ex.printStackTrace();
        }
        return -1L; // Changed to -1L to match the return type Long
    }
}
