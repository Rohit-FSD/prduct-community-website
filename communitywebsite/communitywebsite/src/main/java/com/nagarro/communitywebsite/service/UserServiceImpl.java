package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.interfaces.UserService;
import com.nagarro.communitywebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  UserRepository userRepository;

  @Override
  public User registerUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }
}
