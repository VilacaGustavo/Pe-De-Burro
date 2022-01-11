package com.gustavo.crudspring.repository;

import com.gustavo.crudspring.model.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long > {
    
    
}
