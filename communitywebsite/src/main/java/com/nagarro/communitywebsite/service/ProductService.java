package com.nagarro.communitywebsite.service;

import com.nagarro.communitywebsite.entity.Product;

import java.util.List;

/*
 * Interface for ProductService
 */

public interface ProductService {
    public Long getNumberOfProducts();
    public Long requestReviewForProduct(Product product);
    public List<String> getProductBrands();
}
