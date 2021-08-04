package com.nagarro.communitywebsite.interfaces;

import com.nagarro.communitywebsite.entity.User;

import java.util.List;

public interface UserService {
  public User registerUser(User user);
  public List<User> getAllUsers();
}
