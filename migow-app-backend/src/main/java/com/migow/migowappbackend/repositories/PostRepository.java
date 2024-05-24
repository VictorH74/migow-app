package com.migow.migowappbackend.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.migow.migowappbackend.entities.Post;

public interface PostRepository extends JpaRepository<Post, UUID> {

}
