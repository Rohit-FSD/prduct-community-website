package com.nagarro.communitywebsite.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
 * Entity class for Product
 */

@Entity
@Table(name = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "brand")
    private String brand;

    @Column(name = "product_price")
    private Long productPrice;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "product_code")
    private Long productCode;


    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Review> reviews = new ArrayList<>();

}
