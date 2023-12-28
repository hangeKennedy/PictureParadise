package com.cibertec.pe.restcontroller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.pe.modelo.Categoria;
import com.cibertec.pe.servicio.CategoriaServicio;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {

	@Autowired
    private CategoriaServicio categoriaServicio;

    @GetMapping("/categoria")
    public ResponseEntity<?> listarCategorias() {
        List<Categoria> categorias = categoriaServicio.listarCategorias();
        return new ResponseEntity<>(categorias, categorias.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }
    
    @PostMapping("/categoria")
	public ResponseEntity<Categoria> guardarCategoria(@RequestBody Categoria categoria) {
		return ResponseEntity.ok(categoriaServicio.guardarCategoria(categoria));
	}
	
	@GetMapping("/categoria/{id}")
	public ResponseEntity<Categoria> buscarCategoria(@PathVariable Integer id) {
		Categoria categoria = categoriaServicio.buscarCategoria(id);
		return ResponseEntity.ok(categoria);
	}
	
	@PutMapping("/categoria")
	public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria) {
		return ResponseEntity.ok(categoriaServicio.actualizarCategoria(categoria));
	}
	
	@DeleteMapping("/categoria/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarImagen(@PathVariable Integer id) {
		categoriaServicio.eliminarCategoria(id);
	    return ResponseEntity.ok(Map.of("eliminarCategoria", true));
	}
}
