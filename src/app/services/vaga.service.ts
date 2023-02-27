import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarVagaDTO, Vaga } from '../models/vaga';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  private url = 'https://localhost:7260/api/vaga';
  constructor(private http: HttpClient) {}

  cadastrar(usuario: CadastrarVagaDTO) {
    return this.http.post(`${this.url}/cadastrar`, usuario);
  }

  listarPorFiltro(filtro: any) {
    return this.http.post(`${this.url}/vagas`, filtro);
  }

  listar() {
    return this.http.get(`${this.url}/vagas`);
  }
}
