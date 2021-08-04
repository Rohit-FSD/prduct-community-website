package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.Review;

/*
 * Interface for ReviewService
 */

public interface ReviewService {
    public Review addReview(long id,Review review);
    public Long getNumberOfReviews();
}
