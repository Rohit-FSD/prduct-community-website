package com.nagarro.communitywebsite.service;


import com.nagarro.communitywebsite.entity.Product;
import com.nagarro.communitywebsite.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ProductServiceImpl implements ProductService{

    List<Long> productCode=new ArrayList<Long>();
    List<Long> productIds=new ArrayList<Long>();
    List<String> productBrands=new ArrayList<String>();

    @Autowired
    ProductRepository productRepository;

    @Override
    public Long getNumberOfProducts() {
        return productRepository.countProducts();
    }

    @Override
    public Long requestReviewForProduct(Product product) {
        productCode=productRepository.getProductCodes();
        productIds=productRepository.getProductIds();
        for(int i=0;i<productCode.size();i++){
            if(product.getProductCode().equals(productCode.get(i))) {
                return productIds.get(i);
            }
        }
        return null;
    }

    @Override
    public List<String> getProductBrands() {
        productBrands= productRepository.getProductBrands();
        return productBrands;
    }

}
