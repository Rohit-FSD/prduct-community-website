package com.nagarro.communitywebsite.repository;

import com.nagarro.communitywebsite.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String userName);

    @Query("SELECT COUNT(u) FROM User u")
    Long countUsers();

    public User findByEmail(String email);

}
