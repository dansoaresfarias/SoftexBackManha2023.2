import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { Midia } from "./midia";

export class Locacao {

    // Fields
    private id: number;
    private dataLocacao: Date;
    private dataPrevista: Date;
    private dataDevolucao?: Date;
    private valorTotal: number;
    private multa?: number;
    private formaPag: string;
    private funcionario: Funcionario;
    private cliente: Cliente;
    private midias: Array<Midia>;

    // Construtor
    constructor(id: number, dataLocacao: Date, dataPrevista: Date, valorTotal: number, formaPag: string,
        funcionario: Funcionario, cliente: Cliente) {
        this.id = id;
        this.dataLocacao = dataLocacao;
        this.dataPrevista = dataPrevista;
        this.valorTotal = valorTotal;
        this.formaPag = formaPag;
        this.funcionario = funcionario;
        this.cliente = cliente;
        this.midias = new Array<Midia>();
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getDataLocacao(): Date {
        return this.dataLocacao;
    }

    getDataPrevista(): Date {
        return this.dataPrevista;
    }

    getDataDevolucao(): Date | undefined {
        return this.dataDevolucao;
    }

    getValorTotal(): number {
        return this.valorTotal;
    }

    getMulta(): number | undefined {
        return this.multa;
    }

    getFormaPag(): string {
        return this.formaPag;
    }

    getFuncionario(): Funcionario {
        return this.funcionario;
    }

    getCliente(): Cliente {
        return this.cliente;
    }

    getMidias(): Array<Midia> {
        return this.midias;
    }

    // Setters
    setDataLocacao(dataLocacao: Date): void {
        this.dataLocacao = dataLocacao;
    }

    setDataPrevista(dataPrevista: Date): void {
        this.dataPrevista = dataPrevista;
    }

    setDataDevolucao(dataDevolucao: Date | undefined): void {
        this.dataDevolucao = dataDevolucao;
    }

    setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    setMulta(multa: number | undefined): void {
        this.multa = multa;
    }

    setFormaPag(formaPag: string): void {
        this.formaPag = formaPag;
    }

    setFuncionario(funcionario: Funcionario): void {
        this.funcionario = funcionario;
    }

    setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    addMidia(midia: Midia): void{
        this.midias.push(midia);
    }

    removeMidia(midia: Midia): void{
        this.midias.splice(this.midias.indexOf(midia), 1);
    }


}