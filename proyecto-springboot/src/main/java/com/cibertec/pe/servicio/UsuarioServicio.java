package com.cibertec.pe.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cibertec.pe.modelo.Usuario;
import com.cibertec.pe.repositorio.UsuarioRepositorio;

@Service
public class UsuarioServicio {

	@Autowired
	private UsuarioRepositorio usuarioRepo;

	public List<Usuario> listarUsuarios() {
		return usuarioRepo.findAll();
	}
}
