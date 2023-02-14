import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioToken } from '../models/usuarioToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  constructor(private router: Router) {}

  fazerLogin(usuario: UsuarioToken) {
    if (usuario.authenticated) {
      this.usuarioAutenticado = usuario.authenticated;
      this.router.navigateByUrl('/vagas');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
