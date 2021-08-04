package com.nagarro.communitywebsite.controllers;

import com.nagarro.communitywebsite.entity.Product;
import com.nagarro.communitywebsite.entity.Review;
import com.nagarro.communitywebsite.entity.User;
import com.nagarro.communitywebsite.repository.ProductRepository;
import com.nagarro.communitywebsite.repository.UserRepository;
import com.nagarro.communitywebsite.service.ProductService;
import com.nagarro.communitywebsite.service.ReviewService;
import com.nagarro.communitywebsite.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

/*
 * Controller
 */

@RestController
@CrossOrigin(origins="*")
public class Controller {

    @Autowired
    UserService userService;

    @Autowired
    ReviewService reviewService;

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository productRepository;

    @RequestMapping("/getUsers")
    public String getUser(){
        return "{\"name\":\"Rohit\"}";
    }

    @PostMapping(value ="/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        //by default role=user
        user.setRole("admin");
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @GetMapping(value="/getNumberOfUsers")
    public ResponseEntity<?> getNumberOfUsers(){
        return ResponseEntity.ok(userService.getNumberOfUsers());
    }

    @PostMapping(value = "/addReview/{id}")
    public ResponseEntity<?> addReview(@PathVariable("id") int productId, @RequestBody Review review){
//        review.setReviewStatus(false);
        return ResponseEntity.ok(reviewService.addReview(productId,review));
    }

    @GetMapping(value = "/getNumberOfReviews")
    public ResponseEntity<?> getNumberOfReviews(){
        return ResponseEntity.ok(reviewService.getNumberOfReviews());
    }

    @GetMapping(value = "getNumberOfProducts")
    public ResponseEntity<?> getNumberOfProducts(){
        return ResponseEntity.ok(productService.getNumberOfProducts());
    }

    @GetMapping(value = "sortByBrand")
    public ResponseEntity<?> sortByBrand(@RequestParam("brand") String brand){
        return ResponseEntity.ok(productRepository.findByBrand(brand, Sort.by(Sort.Direction.ASC,"brand")));
    }

    @PostMapping(value="requestReviewForProduct")
    public ResponseEntity requestReviewForProduct(@RequestBody Product product){
        return ResponseEntity.ok(productService.requestReviewForProduct(product));
    }

    @PostMapping(value = "findByProductCode")
    public ResponseEntity findByProductCode(@RequestBody Product product){
        return ResponseEntity.ok(productService.requestReviewForProduct(product));
    }

    @GetMapping(value = "getProductBrands")
    public ResponseEntity getProductBrands(){
        return ResponseEntity.ok(productService.getProductBrands());
    }

    @GetMapping(value="api/user/findByUsername")
    public ResponseEntity findByUsername(@RequestParam("userName") String userName){
        return ResponseEntity.ok(userService.findByUsername(userName));
    }

    @GetMapping(value = "api/user/findByEmail")
    public ResponseEntity findByEmail(@RequestParam("email") String email){
        return ResponseEntity.ok(userService.findByEmail(email));
    }



}
