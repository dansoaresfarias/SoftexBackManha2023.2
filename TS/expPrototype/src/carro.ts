import { Veiculo } from "./veiculo";

export class Carro extends Veiculo{
    private numPortas : number;
    private potencia : number;

    constructor(modelo : string, marca : string, numRodas: number, cor : string, numPortas : number, potencia : number){
        super(modelo, marca, numRodas, cor);
        this.numPortas = numPortas;
        this.potencia = potencia;
    }

    public override clone(modelo : string, marca : string, numRodas: number, cor : string, numPortas?: number, potencia?: number) : Veiculo{
        let dolly = Object.create(this);
        dolly.modelo = modelo;
        dolly.marca = marca;
        dolly.numeroRodas = numRodas;
        dolly.cor = cor;
        dolly.numPortas = numPortas;
        dolly.potencia = potencia;
        return dolly;
    }

    public override toString() : string{
        return super.toString() + " - " + this.numPortas + " - " + this.potencia;
    }
}