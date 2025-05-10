import { IDespesa } from "./despesa.interface";
import { IReceita } from "./receita.interface";

export class Lancamento {
    id?: number;
    data: string;
    descricao: string;
    ehFixo: boolean;
    ehReceita: boolean;
    mensagem?: string;
    tipo: string;
    valor: number;

constructor(lancamento:any, isReceita: boolean) {
    this.data = lancamento.data;
    this.descricao = lancamento.descricao;
    this.ehFixo = lancamento.ehFixo;
    this.ehReceita = isReceita;
    this.tipo = lancamento.tipo;
    this.valor = lancamento.valor;

    if (lancamento.id) this.id = lancamento.id;
    }

    private toDespesa(): IDespesa {
        return {
            id: this.id,
            data: this.data,
            descricao: this.descricao,
            ehFixo: this.ehFixo,
            tipo: this.tipo,
            valor: this.valor
        }
    }

    private toReceita(): IReceita {
        return {
            id: this.id,
            data: this.data,
            descricao: this.descricao,
            ehFixo: this.ehFixo,
            tipo: this.tipo,
            valor: this.valor
        }
    }

    extractLancamento(): any {
        if (this.ehReceita) {
            return this.toReceita();
        } else {
            return this.toDespesa();
        }
    }
}