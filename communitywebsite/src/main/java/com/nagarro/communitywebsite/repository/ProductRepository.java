package com.nagarro.communitywebsite.repository;

import com.nagarro.communitywebsite.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin(origins = "https://localhost:4200")
@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product,Long> {

    Page<Product> findByProductNameContaining(@RequestParam("findByProductNameContaining") String productName, Pageable pageable);

    Page<Product> findByBrandContaining(@RequestParam("brand") String brand, Pageable pageable);

    Page<Product> findByProductCodeContaining(@RequestParam("productCode") Long productCode, Pageable pageable);

    @Query("SELECT COUNT(p) FROM Product p")
    Long countProducts();

    List<Product> findByBrand(String brand, Sort sort);

    @Query("SELECT p.productCode FROM Product p")
    List<Long> getProductCodes();

    @Query("SELECT p.id FROM Product p")
    List<Long> getProductIds();

    @Query("SELECT DISTINCT p.brand FROM Product p")
    List<String> getProductBrands();
}
