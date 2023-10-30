import { iProduto } from "./iProduto";

export abstract class Computador implements iProduto{
    private ram: number;
    private ssd: number;
    private cpu: number;
    protected tipo: string;
    private preco : number;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number) {
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        this.tipo = tipo;
        this.preco = preco;
    }

    getCPU(): number {
        return this.cpu;
    }

    getRam(): number {
        return this.ram;
    }

    getSSD(): number {
        return this.ssd;
    }

    getTipo(): string {
        return this.tipo;
    }

    getPreco(): number {
        return this.preco;
    }

    toString(): string {
        return `Computador Tipo: ${this.tipo} | Mem. RAM: ${this.ram} | CPU: ${this.cpu} | SSD': ${this.ssd} | Preço: ${this.preco}`;
    }

}