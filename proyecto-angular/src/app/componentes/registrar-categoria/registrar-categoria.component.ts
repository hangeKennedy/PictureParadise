import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {

  categoria: Categoria = new Categoria();

  constructor(
    private categoriaServicio: CategoriaService,
    private router: Router
  ) {}

  onSubmit() {
    this.registrarCategoria();
  }

  registrarCategoria() {
    this.categoriaServicio.guardarCategoria(this.categoria).subscribe(cat => {
        this.goListCategory();
      }, error => {
        console.error(error);
      }
    );
  }

  goListCategory() {
    this.router.navigate(['/lista-categorias']);
  }
}
