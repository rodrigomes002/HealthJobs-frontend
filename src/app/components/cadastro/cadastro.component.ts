import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [MessageService],
})
export class CadastroComponent implements OnInit {
  usuarioform: Usuario = {
    tipo: '',
    email: '',
    senha: '',
  };

  errorMessage!: string;

  constructor(
    private service: UsuarioService,
    private router: Router,
    private messageService: MessageService
  ) {}

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
      this.service.cadastrar(usuario).subscribe(
        (response) => {
          this.sucesso();

          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 1500);
        },
        (error) => {
          let errorMessage = JSON.stringify(
            error.error.split('\r')[0].split(': ')[1]
          );
          let erro = errorMessage.replace('"', '').replace('"', '');
          this.errorMessage = erro;
          this.erro();
        }
      );
    }
  }

  sucesso() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Cadastro realizado com sucesso',
    });
  }

  erro() {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: this.errorMessage,
    });
  }

  clear() {
    this.messageService.clear();
  }
}
