import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/modelo/imagen';
import { ImagenService } from 'src/app/servicios/imagen.service';

declare var $: any;

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  idImagenToDelete: number;
  objImagen:Imagen[];

  constructor(
    private imagenService: ImagenService,  
    private router:Router, 
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.listarImagenes();
  }

  listarImagenes() {
    this.imagenService.listarImagenes().subscribe(imgs => {
      this.objImagen = imgs;
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

  actualizarImagen(id:number) {
    this.router.navigate(['actualizar-imagen', id]);
  }

  eliminarImagen(id: number) {
    if ($.fn.DataTable.isDataTable('#mydatatable')) {
      $('#mydatatable').DataTable().destroy();
    }
    this.imagenService.eliminarImagen(id).subscribe(img => {
      this.listarImagenes();
    });
  }

  confirmarEliminacion(id: number) {
    this.idImagenToDelete = id;
  }
}
