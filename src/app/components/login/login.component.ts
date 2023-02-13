import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {}
  login() {
    if (this.usuarioform.email && this.usuarioform.senha) {
      let usuario = new Login();
      usuario.email = this.usuarioform.email;
      usuario.senha = this.usuarioform.senha;

      this.service.login(usuario).subscribe(() => {});
    }
  }
}
