import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ListImagesComponent } from './componentes/list-images/list-images.component';
import { RegistrarImagenComponent } from './componentes/registrar-imagen/registrar-imagen.component';
import { ActualizarImagenComponent } from './componentes/actualizar-imagen/actualizar-imagen.component';
import { ListaCategoriasComponent } from './componentes/lista-categorias/lista-categorias.component';
import { RegistrarCategoriaComponent } from './componentes/registrar-categoria/registrar-categoria.component';
import { ActualizarCategoriaComponent } from './componentes/actualizar-categoria/actualizar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IniciarSesionComponent,
    ListImagesComponent,
    RegistrarImagenComponent,
    ActualizarImagenComponent,
    ListaCategoriasComponent,
    RegistrarCategoriaComponent,
    ActualizarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
