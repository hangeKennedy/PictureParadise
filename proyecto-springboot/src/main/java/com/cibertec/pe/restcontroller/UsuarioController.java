package com.cibertec.pe.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.pe.modelo.Usuario;
import com.cibertec.pe.servicio.UsuarioServicio;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

	@Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping("/usuario")
    public ResponseEntity<?> listarUsuario() {
        List<Usuario> usuario = usuarioServicio.listarUsuarios();
        return new ResponseEntity<>(usuario, usuario.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }
}
