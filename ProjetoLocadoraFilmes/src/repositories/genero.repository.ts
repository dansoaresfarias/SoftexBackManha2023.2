import { Genero } from "../models/genero";

class GeneroRepository {
    generosDB = new Array<Genero>();

    async save(genero: Genero): Promise<Genero> {
        try {
            this.generosDB.push(genero);
            return genero;
        } catch (err) {
            throw new Error("Falha ao criar o gênero!");
        }
    }

    async retrieveAll(): Promise<Array<Genero>>{
        try {
            return this.generosDB;
        } catch (error) {
            throw new Error("Falha ao retornar os gêneros!");
        }
    }

}

export default new GeneroRepository();