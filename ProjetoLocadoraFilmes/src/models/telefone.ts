export class Telefone {

    //Fields
    private id: number;
    private numero: string;

    // Constructor
    constructor(id: number, numero: string) {
        this.id = id;
        this.numero = numero;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getNumero(): string {
        return this.numero;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setNumero(numero: string): void {
        this.numero = numero;
    }

}