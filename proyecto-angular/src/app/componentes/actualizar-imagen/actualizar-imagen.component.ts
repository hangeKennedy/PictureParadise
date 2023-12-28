import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { Imagen } from 'src/app/modelo/imagen';
import { Usuario } from 'src/app/modelo/usuario';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-actualizar-imagen',
  templateUrl: './actualizar-imagen.component.html',
  styleUrls: ['./actualizar-imagen.component.css']
})
export class ActualizarImagenComponent implements OnInit {

  id: number;
  imagen: Imagen = new Imagen();
  categoria: Categoria[] = [];
  usuario: Usuario[] = [];

  constructor(
    private imagenServicio: ImagenService,
    private categoriaServicio: CategoriaService,
    private usuarioServicio: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.obtenerDatosUpdateCBO();
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.actualizarImagen();
  }

  actualizarImagen() {
      this.imagenServicio.actualizarImagen(this.imagen).subscribe(info => {
          this.goListaImagenes();
        },error => {
          console.log(error);
        }
      );
  }

    obtenerDatosUpdateCBO() {
      this.categoriaServicio.listarCategorias().subscribe(cat => {
        console.log("category", cat);
        this.categoria = cat;

        this.usuarioServicio.listarUsuarios().subscribe(users => {
          this.usuario = users;
  
            this.imagenServicio.buscarImagenById(this.id).subscribe(img => {
                this.imagen = img;
    
                if (this.imagen && this.categoria) {
                  const categoriaSelect = this.categoria.find(categoria => categoria.idCategoria === this.imagen.iCategoria.idCategoria);
                  if (categoriaSelect) {
                    this.imagen.iCategoria = categoriaSelect;
                  }
                }

                if (this.imagen && this.usuario) {
                  const usuarioSeleccionado = this.usuario.find(usuario => usuario.idUsuario === this.imagen.iUsuario.idUsuario);
                  if (usuarioSeleccionado) {
                    this.imagen.iUsuario = usuarioSeleccionado;
                  }
                }

              },
              error => {
                console.log(error);
              }
            );
          });
      });
    }

    goListaImagenes() {
      this.router.navigate(['/list-images']);
    }
  }
