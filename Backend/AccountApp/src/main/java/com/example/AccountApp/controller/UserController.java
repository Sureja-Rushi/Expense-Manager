package com.example.AccountApp.controller;

import com.example.AccountApp.entity.User;
import com.example.AccountApp.repository.UserRepository;
import com.example.AccountApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User newUser = userService.createUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        Long isAuthenticated = userService.authenticate(user.getEmail(), user.getPassword());

        if(isAuthenticated != -1){
            return new ResponseEntity<>(isAuthenticated, HttpStatus.OK);
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect email or password");
        }
    }

    @GetMapping({"/",""})
    public ResponseEntity<List<User>> getAllUser(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping({"/{userId}", "/{userId}/"})
    public ResponseEntity<User> getUserById(@PathVariable String userId){
        User user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}