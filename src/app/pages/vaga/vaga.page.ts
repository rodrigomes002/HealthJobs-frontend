import { VagaFilter } from './../../models/filter/vagaFilter';
import { VagaService } from './../../services/vaga.service';
import { BasePage } from '../base-page';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { LocalFilter } from 'src/app/models/filter/localFilter';
import { EspecialidadeFilter } from 'src/app/models/filter/especialidadeFilter';
import { Vaga, VagaResult } from 'src/app/models/vaga';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  styleUrls: ['./vaga.page.scss'],
})
export class VagaPage extends BasePage implements OnInit {
  cargos: EspecialidadeFilter[] = [];
  cargoSelecionada: EspecialidadeFilter[] = [];
  vagas: Vaga[] = [];
  locais: LocalFilter[] = [];
  localSelecionado: LocalFilter[] = [];
  vagaFilter: VagaFilter = new VagaFilter();
  count: number;
  constructor(usuarioService: UsuarioService, private service: VagaService) {
    super(usuarioService);
  }

  ngOnInit(): void {
    this.listar();
    this.locais.push(new LocalFilter('Rio de Janeiro'));
    this.locais.push(new LocalFilter('São Paulo'));
    this.locais.push(new LocalFilter('Minas Gerais'));

    this.cargos.push(new EspecialidadeFilter('Fisioterapeuta'));
    this.cargos.push(new EspecialidadeFilter('Médico'));
    this.cargos.push(new EspecialidadeFilter('Enfermeiro'));
  }

  listar() {
    this.vagaFilter.locais = this.localSelecionado.map((l) => l.local);
    this.vagaFilter.especialidades = this.cargoSelecionada.map((e) => e.cargo);
    this.service.listarPorFiltro(this.vagaFilter).subscribe((response) => {
      let result = response as VagaResult;
      this.vagas = result.vagas;
      this.count = result.count;
    });
  }

  clickPagina(event: any) {
    this.vagaFilter.page = event.page + 1;
    this.listar();
  }

  logout() {
    this.usuarioService.logout();
  }
}
