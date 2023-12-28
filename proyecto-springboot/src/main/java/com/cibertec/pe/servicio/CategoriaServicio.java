package com.cibertec.pe.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cibertec.pe.modelo.Categoria;
import com.cibertec.pe.repositorio.CategoriaRepositorio;

@Service
public class CategoriaServicio {

	@Autowired
	private CategoriaRepositorio categoriaRepo;
	
	/* ********************************
	/* ********** CRUD ****************
	 * ********************************/
	public List<Categoria> listarCategorias(){
		return categoriaRepo.findAll();
	}
	
	public Categoria guardarCategoria(Categoria categoria) {
        return categoriaRepo.save(categoria);
    }
    
    public Categoria actualizarCategoria(Categoria categoria) {
    	return categoriaRepo.save(categoria);
    }

    public Categoria buscarCategoria(Integer cod) {
        return categoriaRepo.findById(cod).orElse(null);
    }

    public void eliminarCategoria(Integer cod) {
    	categoriaRepo.deleteById(cod);
    }
}
