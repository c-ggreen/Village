package com.village.database.service;

import com.village.database.model.User;
import com.village.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userrepository;
    public Iterable<User> getItems(){
        return userrepository.findAll();
    }

    public User getItemById(Long id) {
        return userrepository.findById(id).get();
    }

    public User createItem(User item) {
        return userrepository.save(item);
    }

    public User updateItems(User item) {
        return userrepository.save(item);
    }

    public HttpStatus deleteItem(Long id) {
        userrepository.deleteById(id);
        return HttpStatus.OK;
    }
}
