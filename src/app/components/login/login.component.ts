import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { UsuarioToken } from 'src/app/models/usuarioToken';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioform: Login = {
    email: '',
    senha: '',
  };

  constructor(
    private service: UsuarioService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    if (this.usuarioform.email && this.usuarioform.senha) {
      let usuario = new Login();
      usuario.email = this.usuarioform.email;
      usuario.senha = this.usuarioform.senha;

      this.service.login(usuario).subscribe((response) => {
        let usuario = response as UsuarioToken;
        this.service.setToken(usuario.token);
        this.authService.fazerLogin(usuario);
      });
    }
  }
}
