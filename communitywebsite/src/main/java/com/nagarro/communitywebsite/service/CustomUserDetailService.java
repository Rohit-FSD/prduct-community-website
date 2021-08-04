package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.CustomUserDetails;
import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        final User user=this.userRepository.findByUsername(userName);

        if(user==null){
            throw new UsernameNotFoundException("User not found");
        }
        else{
            return new CustomUserDetails(user);
        }

    }
}
