import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../modelo/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private baseURL = "http://localhost:8080/api/imagen";

  constructor(private httpClient : HttpClient) { }

  listarImagenes():Observable<Imagen[]>{
    return this.httpClient.get<Imagen[]>(`${this.baseURL}`);
  }

  listarImagenesEnReversa():Observable<Imagen[]>{
    return this.httpClient.get<Imagen[]>(`${this.baseURL}/reverse`);
  }

  guardarImagen(imagen:Imagen) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, imagen);
  }

  actualizarImagen(imagen:Imagen) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`, imagen);
  }

  buscarImagenById(id:number) : Observable<Imagen>{
    return this.httpClient.get<Imagen>(`${this.baseURL}/${id}`);
  }

  eliminarImagen(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  buscarImagenPorTitulo(titulo: string): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(`${this.baseURL}/buscar?titulo=${titulo}`);
  }

  buscarImagenCategoriaPorId(id: number): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(`${this.baseURL}/categoria?id=${id}`);
  }
}
