package com.nagarro.communitywebsite.repository;

import com.nagarro.communitywebsite.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String userName);

}
