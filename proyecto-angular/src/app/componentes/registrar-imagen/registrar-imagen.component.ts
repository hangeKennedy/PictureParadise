import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { Imagen } from 'src/app/modelo/imagen';
import { Usuario } from 'src/app/modelo/usuario';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registrar-imagen',
  templateUrl: './registrar-imagen.component.html',
  styleUrls: ['./registrar-imagen.component.css']
})
export class RegistrarImagenComponent implements OnInit {

  imagen: Imagen = new Imagen();
  usuario: Usuario[] = []; 
  categoria: Categoria[] = []; 

  constructor(
    private imagenServicio: ImagenService, 
    private usuarioServicio: UsuarioService,
    private categoriaServicio: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerUsuariosCBO();
    this.obtenerCategoriasCBO();
  }

  onSubmit() {
    this.registrarImagen();
  }

  registrarImagen() {
    this.imagenServicio.guardarImagen(this.imagen).subscribe(dato => {
        this.goListImages();
      }, error => {
        console.error(error);
      }
    );
  }

  obtenerUsuariosCBO() {
    this.usuarioServicio.listarUsuarios().subscribe(users => {
      this.usuario = users;
    });
  }

  obtenerCategoriasCBO() {
    this.categoriaServicio.listarCategorias().subscribe(category => {
      this.categoria = category;
    });
  }

  goListImages() {
    this.router.navigate(['/list-images']);
  }
}
