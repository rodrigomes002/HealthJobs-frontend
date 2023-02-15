import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss'],
})
export class VagaComponent implements OnInit {
  role!: string;
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.role = this.usuarioService.getRole();
  }

  logout() {
    this.usuarioService.logout();
  }
}
