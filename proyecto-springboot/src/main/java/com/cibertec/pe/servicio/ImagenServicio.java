package com.cibertec.pe.servicio;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cibertec.pe.modelo.Imagen;
import com.cibertec.pe.repositorio.ImagenRepositorio;

@Service
public class ImagenServicio {

	@Autowired
	private ImagenRepositorio imagenRepo;
	
	/* ********************************
	/* ********** CRUD ****************
	 * ********************************/
    public List<Imagen> listarImagenes() {
        return imagenRepo.findAll();
    }

    public Imagen guardarImagen(Imagen imagen) {
        return imagenRepo.save(imagen);
    }
    
    public Imagen actualizarImagen(Imagen imagen) {
    	return imagenRepo.save(imagen);
    }

    public Imagen buscarImagen(Integer cod) {
        return imagenRepo.findById(cod).orElse(null);
    }

    public void eliminarImagen(Integer cod) {
    	imagenRepo.deleteById(cod);
    }
    
    /* ********************************
	/* ******* OTHER METHODS **********
	 * ********************************/
    
    public List<Imagen> listarImagenesEnReversa() {
        List<Imagen> imagenes = imagenRepo.findAll();
        Collections.reverse(imagenes);
        return imagenes;
    }
    
    public List<Imagen> buscarImagenPorTitulo(String titulo) {
		return imagenRepo.findByTituloContainingIgnoreCase(titulo);
	}
    
    public List<Imagen> buscarImagenCategoriaPorId(int id) {
		return imagenRepo.findByiCategoriaIdCategoria(id);
	}
}
