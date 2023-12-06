import { Cliente } from "./cliente";
import { Endereco } from "./endereco";

export class Funcionario extends Cliente {

    // Fields
    private ctps: string;
    private salario: number;
    private dataAdm: Date;
    private dataDem?: Date;

    // Constructor
    constructor(cpf: string, nome: string, ctps: string, salario: number, dataNasc: Date, dataAdm: Date, email: string, end: Endereco){
        super(cpf, nome, dataNasc, email, end);
        this.ctps = ctps;
        this.salario = salario;
        this.dataAdm = dataAdm;
    }

    // Getters
    getCtps(): string {
        return this.ctps;
    }

    getSalario(): number {
        return this.salario;
    }

    getDataAdm(): Date {
        return this.dataAdm;
    }

    getDataDem(): Date | undefined {
        return this.dataDem;
    }

    // Setters
    setCtps(ctps: string): void {
        this.ctps = ctps;
    }

    setSalario(salario: number): void {
        this.salario = salario;
    }

    setDataAdm(dataAdm: Date): void {
        this.dataAdm = dataAdm;
    }

    setDataDem(dataDem: Date): void {
        this.dataDem = dataDem;
    }
}