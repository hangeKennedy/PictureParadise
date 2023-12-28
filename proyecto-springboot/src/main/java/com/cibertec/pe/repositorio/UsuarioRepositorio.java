package com.cibertec.pe.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cibertec.pe.modelo.Usuario;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{

}
