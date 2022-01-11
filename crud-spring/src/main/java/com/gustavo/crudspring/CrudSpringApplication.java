package com.gustavo.crudspring;

import com.gustavo.crudspring.model.Produto;
import com.gustavo.crudspring.repository.ProdutoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(ProdutoRepository produtoRepository){
		return args -> {
			produtoRepository.deleteAll();

			Produto p = new Produto();
			p.setNome_produto("Bone Pe de Burro");
			p.setCategoria("Bone");
			p.setPreco((float)50.5);

			produtoRepository.save(p);
		};
	}

}
