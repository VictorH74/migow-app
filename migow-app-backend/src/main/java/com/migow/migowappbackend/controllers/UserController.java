package com.migow.migowappbackend.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.migow.migowappbackend.entities.User;
import com.migow.migowappbackend.services.UserService;

@RestController(value="users")
public class UserController {

    @Autowired
    UserService service;

    @GetMapping(path = "/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s", name);
    }

    @GetMapping("/")
    public Page<User> findAll(
            @RequestParam(value = "pageNumber", defaultValue = "0") int pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {
        /*
         * Pageable pageable = PageRequest.of(0, 10, Sort.by("publicationDate"));
         * Slice<Book> slice =
         * bookRepository.findBooksByTitleContainsOrderByPublicationDate("Spring",
         * pageable);
         * List<Book> books = slice.getContent();
         * boolean hasNext = slice.hasNext();
         */

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return service.findAll(pageable);
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User obj) {
        obj = service.save(obj);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

        return ResponseEntity.created(uri).body(obj);
    }

}
