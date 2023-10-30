import { Computador } from "./Computador";

export class Servidor extends Computador{
    private sistemaRaid : string;
    private so : string;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number, sistemaRaid: string, so: string) {
        super(ram, ssd, cpu, tipo, preco);
        this.sistemaRaid = sistemaRaid;
        this.so = so;
    }

    getSistemaRaid(): string {
        return this.sistemaRaid;
    }

    getSO(): string {
        return this.so;
    }

    setSO(so: string): void{
        this.so = so;
    }

    setSistemaRaid(sistemaRaid: string) {
        this.sistemaRaid = sistemaRaid;
    }


    toString(): string {
        return `Computador Tipo: ${this.tipo} | Mem. RAM: ${super.getRam()}GB | CPU: ${super.getCPU()}GHz | SSD: ${super.getSSD()}GB | Preço: R$ ${super.getPreco()} | Sistema Operacional: ${this.so} | Sistema Raid: ${this.sistemaRaid}`;
    }
}