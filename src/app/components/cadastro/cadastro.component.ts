import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  usuarioform: Usuario = {
    tipo: '',
    email: '',
    senha: '',
  };

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  cadastrar() {
    if (
      this.usuarioform.email &&
      this.usuarioform.senha &&
      this.usuarioform.tipo
    ) {
      let usuario = new Usuario();
      usuario.email = this.usuarioform.email;
      usuario.senha = this.usuarioform.senha;
      usuario.tipo = this.usuarioform.tipo;
      this.service.cadastrar(usuario).subscribe(() => {});
    }
  }
}
