import { BasePage } from '../base-page';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  styleUrls: ['./vaga.page.scss'],
})
export class VagaPage extends BasePage implements OnInit {
  role!: string;
  constructor(usuarioService: UsuarioService) {
    super(usuarioService);
  }

  ngOnInit(): void {}

  logout() {
    this.usuarioService.logout();
  }
}
