package com.cibertec.pe.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Imagen")
public class Imagen {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idImagen")
	private Integer idImagen;

	@Column(name = "titulo")
	private String titulo;

	@Column(name = "imagen")
	private String imagen;
	
	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario iUsuario;

	@ManyToOne
	@JoinColumn(name = "id_categoria")
	private Categoria iCategoria;

	public Integer getIdImagen() {
		return idImagen;
	}

	public void setIdImagen(Integer idImagen) {
		this.idImagen = idImagen;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public Usuario getiUsuario() {
		return iUsuario;
	}

	public void setiUsuario(Usuario iUsuario) {
		this.iUsuario = iUsuario;
	}

	public Categoria getiCategoria() {
		return iCategoria;
	}

	public void setiCategoria(Categoria iCategoria) {
		this.iCategoria = iCategoria;
	}
}
