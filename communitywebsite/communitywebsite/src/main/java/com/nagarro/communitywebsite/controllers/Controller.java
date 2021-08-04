package com.nagarro.communitywebsite.controllers;

import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins="*")
public class Controller {

  @Autowired
  UserService userService;

    @RequestMapping("/welcome")
    public String welcome(){
        String text="this is private page";
        return text;
    }

    @RequestMapping("/getUsers")
    public String getUser(){
        return "{\"name\":\"Mahima\"}";
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
      return ResponseEntity.ok(userService.registerUser(user));
    }

    @GetMapping(value = "/getALlUsers")
    public ResponseEntity<?> getAllUsers() {
      return ResponseEntity.ok(userService.getAllUsers());

    }
}
