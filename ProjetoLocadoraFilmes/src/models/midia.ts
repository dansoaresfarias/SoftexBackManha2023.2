import { Filme } from "./filme";
import { Status } from "./status";

export class Midia {

    // Fields
    private id: number;
    private secao: number;
    private local: string;
    private tipo: string;
    private status: Status;
    private filme: Filme

    // Constructor
    constructor(id: number, secao: number, local: string, tipo: string, status: Status, filme: Filme) {
        this.id = id;
        this.secao = secao;
        this.local = local;
        this.tipo = tipo;
        this.status = status;
        this.filme = filme;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getSecao(): number {
        return this.secao;
    }

    getLocal(): string {
        return this.local;
    }

    getTipo(): string {
        return this.tipo;
    }

    getStatus(): Status {
        return this.status;
    }

    getFilme(): Filme {
        return this.filme;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setSecao(secao: number): void {
        this.secao = secao;
    }

    setLocal(local: string): void {
        this.local = local;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    setStatus(status: Status): void {
        this.status = status;
    }

    setFilme(filme: Filme): void {
        this.filme = filme;
    }

}