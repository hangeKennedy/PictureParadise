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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.pe.modelo.Imagen;
import com.cibertec.pe.servicio.ImagenServicio;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ImagenController {

	@Autowired
    private ImagenServicio imagenServicio;

	@GetMapping("/imagen")
	public ResponseEntity<?> listarImagenes() {
        List<Imagen> imagen = imagenServicio.listarImagenes();
        return new ResponseEntity<>(imagen, imagen.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }
	
	@GetMapping("/imagen/reverse")
	public ResponseEntity<?> listarImagenesEnReversa() {
		List<Imagen> imagen = imagenServicio.listarImagenesEnReversa();
		return new ResponseEntity<>(imagen, imagen.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/imagen")
	public ResponseEntity<Imagen> guardarImagen(@RequestBody Imagen imagen) {
		return ResponseEntity.ok(imagenServicio.guardarImagen(imagen));
	}
	
	@GetMapping("/imagen/{id}")
	public ResponseEntity<Imagen> buscarImagenPorId(@PathVariable Integer id) {
		Imagen imagen = imagenServicio.buscarImagen(id);
		return ResponseEntity.ok(imagen);
	}
	
	@PutMapping("/imagen")
	public ResponseEntity<Imagen> actualizarImagen(@RequestBody Imagen imagen) {
		return ResponseEntity.ok(imagenServicio.guardarImagen(imagen));
	}
	
	@DeleteMapping("/imagen/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarImagen(@PathVariable Integer id) {
		imagenServicio.eliminarImagen(id);
	    return ResponseEntity.ok(Map.of("eliminarImagen", true));
	}
	
	@GetMapping("/imagen/buscar")
	public ResponseEntity<List<Imagen>> buscarImagenPorTitulo(@RequestParam String titulo) {
		List<Imagen> juego = imagenServicio.buscarImagenPorTitulo(titulo);
		return ResponseEntity.ok(juego);
	}
	
	@GetMapping("/imagen/categoria")
	public ResponseEntity<List<Imagen>> buscarImagenCategoriaPorId(@RequestParam int id) {
		List<Imagen> imagen = imagenServicio.buscarImagenCategoriaPorId(id);
		return ResponseEntity.ok(imagen);
	}
}
