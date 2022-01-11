package com.gustavo.crudspring.controller;

import java.util.List;

import com.gustavo.crudspring.model.Produto;
import com.gustavo.crudspring.repository.ProdutoRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/product")
@AllArgsConstructor
public class ProdutoController {

    private final ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> lista(){
        return produtoRepository.findAll();
    }
}
