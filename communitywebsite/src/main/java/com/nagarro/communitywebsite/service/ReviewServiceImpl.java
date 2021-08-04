package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.Product;
import com.nagarro.communitywebsite.entity.Review;
import com.nagarro.communitywebsite.repository.ProductRepository;
import com.nagarro.communitywebsite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    ProductRepository productRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public Review addReview(long id,Review review) {
        Product product=productRepository.getById((long) id);
        product.getReviews().add(review);
        productRepository.save(product);

        return review;
    }
    @Override
    public Long getNumberOfReviews(){
        return reviewRepository.countReviews();
    }
}
