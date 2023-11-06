export abstract class Veiculo {
    protected modelo : string;
    protected marca : string;
    protected numeroRodas : number;
    protected cor : string;
    
    
    constructor (modelo : string, marca : string, numRodas: number, cor : string){
        this.modelo = modelo;
        this.marca = marca;
        this.numeroRodas = numRodas;
        this.cor = cor;
    }

    public abstract clone(modelo : string, marca : string, numRodas: number, cor : string) : Veiculo;

    public toString() : string{
        return this.modelo + " - " + this.marca + " - " + this.numeroRodas + " - " + this.cor;
    }
}