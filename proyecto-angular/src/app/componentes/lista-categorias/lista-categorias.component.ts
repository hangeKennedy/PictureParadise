import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

declare var $: any;

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  idCategoriaToDelete: number;
  objCategoria:Categoria[];

  constructor(
    private categoriaServicio: CategoriaService,  
    private router:Router
    ) {}
  
  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categoriaServicio.listarCategorias().subscribe(cate => {
      this.objCategoria = cate;
      this.mostrarLibreriaDeTablas();
    });
  }

  mostrarLibreriaDeTablas(){
      $(document).ready(function() {
        $('#mydatatable').DataTable({
            "aLengthMenu": [10, 25, 50, 100],
            "language": {
              "url": "https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
          }
        });
    });  
  }

  actualizarCategoria(id:number) {
    this.router.navigate(['actualizar-categoria', id]);
  }

  eliminarCategoria(id: number) {
    if ($.fn.DataTable.isDataTable('#mydatatable')) {
      $('#mydatatable').DataTable().destroy();
    }
    this.categoriaServicio.eliminarCategoria(id).subscribe(img => {
      this.listarCategorias();
    });
  }

  confirmarEliminacion(id: number) {
    this.idCategoriaToDelete = id;
  }
}
