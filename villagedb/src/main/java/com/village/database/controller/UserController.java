package com.village.database.controller;

import com.village.database.model.User;
import com.village.database.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userservice;
    @GetMapping
    public Iterable<User> getItems(){
        return userservice.getItems();
    }

    @PostMapping
    public User createItem(@RequestBody User item) {
        return userservice.createItem(item);
    }

    @GetMapping("/{id}")
    public User getItemById(@PathVariable Long id) {
        return userservice.getItemById(id);
    }

    @PatchMapping
    public User updateItem(@RequestBody User item) {
        return userservice.updateItems(item);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteItem(@PathVariable Long id) {
        return userservice.deleteItem(id);
    }
}
