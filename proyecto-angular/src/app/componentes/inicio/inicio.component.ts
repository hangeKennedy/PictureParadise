import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { Imagen } from 'src/app/modelo/imagen';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  objImagen: Imagen[] = [];
  objCategory: Categoria[] = [];
  imagenUrl: string = ''; 
  nombreArchivo: string = ''; 
  public isModalOpen = false;
  titulo: string;

  constructor(
    private imagenServicio: ImagenService,
    private categoriaServicio: CategoriaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarImagenesReverse();
    this.obtenerCategoriasCBO();
  }

  obtenerCategoriasCBO() {
    this.categoriaServicio.listarCategorias().subscribe(category => {
      this.objCategory = category;
    });
  }

  listarImagenesReverse() {
    this.imagenServicio.listarImagenesEnReversa().subscribe(imgs => {
      this.objImagen = this.objImagen.concat(imgs);
    });
  }

  descargarImagen(imagenUrl: string, nombreArchivo: string) {
    // Realizar la solicitud GET para obtener la imagen
    fetch(imagenUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al descargar la imagen: ${response.status} - ${response.statusText}`);
        }
        return response.blob();
      })
      .then(blob => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobURL;
        a.download = nombreArchivo;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(blobURL);
      })
      .catch(error => {
        console.error(error);
        alert(`Se produjo un error al descargar la imagen. Por favor, inténtelo de nuevo o verifique la URL de la imagen.`);
      });
  }  

  /* verImagen(imagenUrl: string) {
    window.open(imagenUrl, '_blank');
  } */

  openModal(imagenUrl: string, nombreArchivo: string) {
    this.isModalOpen = true;
    this.nombreArchivo = nombreArchivo;
    this.imagenUrl = imagenUrl;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  buscarImagenPorTitulo() {
    this.imagenServicio.buscarImagenPorTitulo(this.titulo)
      .subscribe(
        imagen => {
          this.objImagen = imagen;
          if (imagen.length === 0) {
            alert(`No se encontraron imágenes con el nombre: "${this.titulo}"`);
          }
        },
        error => {
          this.objImagen = [];
          alert('Se produjo un error al buscar imágenes.');
        }
      );
  }

  buscarImagenCategoriaPorId(idCategoria: number) {
    this.imagenServicio.buscarImagenCategoriaPorId(idCategoria).subscribe(
      (categories) => {
        this.objImagen = categories;
      },
      (error) => {
        this.objImagen = [];
      }
    );
  }
}
