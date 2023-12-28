import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseURL = "http://localhost:8080/api/categoria";

  constructor(private httpClient : HttpClient) { }

  listarCategorias():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
  }

  guardarCategoria(categoria:Categoria) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, categoria);
  }

  actualizarCategoria(categoria:Categoria) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}`, categoria);
  }

  buscarCategoriaById(id:number) : Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.baseURL}/${id}`);
  }

  eliminarCategoria(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
