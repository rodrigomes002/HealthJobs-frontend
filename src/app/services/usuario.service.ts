import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://localhost:7260/api/usuario';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar(usuario: Usuario) {
    return this.http.post(`${this.url}/cadastrar`, usuario);
  }

  login(usuario: Login) {
    return this.http.post(`${this.url}/login`, usuario);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getRole() {
    const token = this.getToken();

    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.role;
    }
  }

  getTokenExpirationDate(token: string) {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  tokenExpirado(token: string) {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined || date === null) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  usuarioLogado() {
    const token = this.getToken();
    if (!token) {
      return false;
    } else if (this.tokenExpirado(token)) {
      return false;
    }

    return true;
  }
}
