import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://localhost:7260/api/usuario';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario) {
    return this.http.post(`${this.url}/cadastrar`, usuario);
  }

  login(usuario: Login) {
    return this.http.post(`${this.url}/login`, usuario);
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
