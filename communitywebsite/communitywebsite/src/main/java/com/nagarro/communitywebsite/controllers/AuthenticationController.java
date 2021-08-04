package com.nagarro.communitywebsite.controllers;

import com.nagarro.communitywebsite.entity.AuthenticationRequest;
import com.nagarro.communitywebsite.entity.LoginResponse;
import com.nagarro.communitywebsite.helper.JwtUtil;
import com.nagarro.communitywebsite.service.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping(value = "/token",method = RequestMethod.POST)
    public ResponseEntity<?> generateToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        System.out.println(authenticationRequest);
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(),authenticationRequest.getPassword()));
        }
        catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("Bad credentials");
        }catch (BadCredentialsException e){
            e.printStackTrace();
            throw new Exception("Bad Credentials");
        }
        UserDetails userDetails=this.customUserDetailService.loadUserByUsername(authenticationRequest.getUserName());

        String token=this.jwtUtil.generateToken(userDetails);
        System.out.println("JWT"+token);

        return ResponseEntity.ok(new LoginResponse(token));

    }
}
