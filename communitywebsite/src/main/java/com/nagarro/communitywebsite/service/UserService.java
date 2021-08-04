package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.User;

/*
 * Interface for UserService
 */

public interface UserService {

    public User registerUser(User user);

    public Long getNumberOfUsers();

    public int findByUsername(String username);

    public int findByEmail(String email);
}
