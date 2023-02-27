export class CadastrarVagaDTO {
  id?: number;
  empresa: string;
  cargo: string;
  salario: number;
  descricao: string;
  local: string;
  candidato: string;
}

export class VagaResult {
  vagas: Vaga[];
  count: number;
}

export class Vaga {
  id?: number;
  empresa: string;
  cargo: string;
  salario: number;
  descricao: string;
  local: string;
  candidato: string;
}
