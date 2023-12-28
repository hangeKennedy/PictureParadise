import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {

  id: number;
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaServicio: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.obtenerCategoriaPorId(this.id);
  }

  obtenerCategoriaPorId(id: number): void {
    this.categoriaServicio.buscarCategoriaById(id).subscribe(dato => {
      this.categoria = dato;
    });
  }

  onSubmit() {
    this.actualizarImagen();
  }

  actualizarImagen() {
    this.categoriaServicio.actualizarCategoria(this.categoria).subscribe(info => {
        this.goListCategory();
      },error => {
        console.log(error);
      }
    );
  }

  goListCategory() {
    this.router.navigate(['/lista-categorias']);
  }
}
