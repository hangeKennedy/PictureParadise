package com.cibertec.pe.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cibertec.pe.modelo.Imagen;

public interface ImagenRepositorio extends JpaRepository<Imagen, Integer>{
	List<Imagen> findByTituloContainingIgnoreCase(String titulo);
	List<Imagen> findByiCategoriaIdCategoria(int id);
}
