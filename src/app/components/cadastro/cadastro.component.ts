import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MessageService } from 'primeng/api';
import { NotificacaoService } from 'src/app/services/notificacao.service';

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
    private notificacaoService: NotificacaoService
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
          this.notificacaoService.success('Usuário cadastrado com sucesso');

          setTimeout(() => {
            this.router.navigateByUrl('/login');
          }, 1500);
        },
        (error) => {
          this.notificacaoService.error(
            'Já existe um usuário com este email cadastrado'
          );
        }
      );
    }
  }
}
