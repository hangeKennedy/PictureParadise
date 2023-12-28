import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ListImagesComponent } from './componentes/list-images/list-images.component';
import { RegistrarImagenComponent } from './componentes/registrar-imagen/registrar-imagen.component';
import { ActualizarImagenComponent } from './componentes/actualizar-imagen/actualizar-imagen.component';
import { ListaCategoriasComponent } from './componentes/lista-categorias/lista-categorias.component';
import { RegistrarCategoriaComponent } from './componentes/registrar-categoria/registrar-categoria.component';
import { ActualizarCategoriaComponent } from './componentes/actualizar-categoria/actualizar-categoria.component';

const routes: Routes = [
  {path: '',redirectTo:'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'list-images', component: ListImagesComponent},
  {path: 'registrar-imagen', component: RegistrarImagenComponent},
  {path: 'actualizar-imagen/:id', component: ActualizarImagenComponent},
  {path: 'lista-categorias', component: ListaCategoriasComponent},
  {path: 'registrar-categoria', component: RegistrarCategoriaComponent},
  {path: 'actualizar-categoria/:id', component: ActualizarCategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
