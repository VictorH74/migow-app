package com.migow.migowappbackend.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "db_post")
public class Post implements Serializable {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User ownerId;

    private Instant createdAt;
    private String text;

    @OneToMany
    @JoinColumn(name = "media_list")
    private Set<Media> mediaList;

    public Post() {
    }

    public Post(UUID id, User ownerId, Instant createdAt, String text, Set<Media> mediaList) {
        this.id = id;
        this.ownerId = ownerId;
        this.createdAt = createdAt;
        this.text = text;
        this.mediaList = mediaList;
    }

    public UUID getId() {
        return id;
    }

    public User getOwnerId() {
        return ownerId;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public String getText() {
        return text;
    }

    public Set<Media> getMediaList() {
        return mediaList;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setOwnerId(User ownerId) {
        this.ownerId = ownerId;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setMediaList(Set<Media> mediaList) {
        this.mediaList = mediaList;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((ownerId == null) ? 0 : ownerId.hashCode());
        result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
        result = prime * result + ((text == null) ? 0 : text.hashCode());
        result = prime * result + ((mediaList == null) ? 0 : mediaList.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Post other = (Post) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (ownerId == null) {
            if (other.ownerId != null)
                return false;
        } else if (!ownerId.equals(other.ownerId))
            return false;
        if (createdAt == null) {
            if (other.createdAt != null)
                return false;
        } else if (!createdAt.equals(other.createdAt))
            return false;
        if (text == null) {
            if (other.text != null)
                return false;
        } else if (!text.equals(other.text))
            return false;
        if (mediaList == null) {
            if (other.mediaList != null)
                return false;
        } else if (!mediaList.equals(other.mediaList))
            return false;
        return true;
    }

}
