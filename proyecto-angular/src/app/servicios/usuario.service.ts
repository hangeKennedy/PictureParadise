import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/api/usuario";

  constructor(private httpClient : HttpClient) { }

  listarUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }
}
