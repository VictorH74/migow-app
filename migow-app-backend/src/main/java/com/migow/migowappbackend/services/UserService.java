package com.migow.migowappbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.migow.migowappbackend.entities.User;
import com.migow.migowappbackend.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public Page<User> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public User save(User user) {
        return repository.save(user);
    }

}
