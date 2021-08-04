package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    public User userName;
    public User credentials;

    @Autowired
    UserRepository userRepository;

    @Override
    public User registerUser(User user){
        return userRepository.save(user);
    }

    @Override
    public Long getNumberOfUsers(){
        return userRepository.countUsers();
    }

    @Override
    public int findByUsername(String username) {
        userName=userRepository.findByUsername(username);
        if(userName==null)
            return 0;
        return 1;
    }

    @Override
    public int findByEmail(String email) {
        credentials=userRepository.findByEmail(email);
        if(credentials==null)
            return 0;
        return 1;
    }
}
