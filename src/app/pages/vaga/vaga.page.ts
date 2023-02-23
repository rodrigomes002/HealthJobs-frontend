import { BasePage } from '../base-page';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { LocalFilter } from 'src/app/models/filter/localFilter';
import { EspecialidadeFilter } from 'src/app/models/filter/especialidadeFilter';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  styleUrls: ['./vaga.page.scss'],
})
export class VagaPage extends BasePage implements OnInit {
  role!: string;
  especialidades: EspecialidadeFilter[] = [];
  especialidadeSelecionada: EspecialidadeFilter[] = [];

  locais: LocalFilter[] = [];
  localSelecionado: LocalFilter[] = [];
  constructor(usuarioService: UsuarioService) {
    super(usuarioService);
  }

  ngOnInit(): void {
    this.locais.push(new LocalFilter('Rio de Janeiro'));
    this.locais.push(new LocalFilter('São Paulo'));
    this.locais.push(new LocalFilter('Minas Gerais'));

    this.especialidades.push(new EspecialidadeFilter('Fisioterapia'));
    this.especialidades.push(new EspecialidadeFilter('Medicina'));
    this.especialidades.push(new EspecialidadeFilter('Enfermagem'));
  }

  logout() {
    this.usuarioService.logout();
  }
}
