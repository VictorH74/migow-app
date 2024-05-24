package com.migow.migowappbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.migow.migowappbackend.entities.Post;
import com.migow.migowappbackend.repositories.PostRepository;

public class PostService {

    @Autowired
    PostRepository repository;

    public Page<Post> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

}
