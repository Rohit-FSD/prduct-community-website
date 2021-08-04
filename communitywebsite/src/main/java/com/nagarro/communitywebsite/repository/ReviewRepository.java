package com.nagarro.communitywebsite.repository;

import com.nagarro.communitywebsite.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
public interface ReviewRepository extends JpaRepository<Review,Long> {
    @Query("SELECT COUNT(r) FROM Review r")
    Long countReviews();
}
