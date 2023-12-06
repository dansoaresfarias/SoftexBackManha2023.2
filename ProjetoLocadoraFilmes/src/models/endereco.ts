export class Endereco {

    // Fields
    private id: number;
    private UF: string;
    private cidade: string;
    private bairro: string;
    private rua: string;
    private numero: number;
    private comp?: string;
    private cep: string;

    // Constructor
    constructor(idEndereco: number, UF: string, cidade: string, bairro: string, rua: string, numero: number, comp: string, cep: string) {
        this.id = idEndereco;
        this.UF = UF;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.comp = comp;
        this.cep = cep;

    }

    // Getters
    getId(): number {
        return this.id;
    }

    getUF(): string {
        return this.UF;
    }

    getCidade(): string {
        return this.cidade;
    }

    getBairro(): string {
        return this.bairro;
    }

    getRua(): string {
        return this.rua;
    }

    getNumero(): number {
        return this.numero;
    }

    getComp(): string | undefined {
        return this.comp;
    }

    getCep(): string {
        return this.cep;
    }

    // Setters
    setUF(UF: string): void {
        this.UF = UF;
    }

    setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    setRua(rua: string): void {
        this.rua = rua;
    }

    setNumero(numero: number): void {
        this.numero = numero;
    }

    setComp(comp: string | undefined): void {
        this.comp = comp;
    }

    setCep(cep: string): void {
        this.cep = cep;
    }

}