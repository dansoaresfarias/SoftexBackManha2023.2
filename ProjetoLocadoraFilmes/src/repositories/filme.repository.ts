import { Filme } from "../models/filme";


class FilmeRepository {
    filmesDB = new Array<Filme>();

    async save(filme: Filme): Promise<Filme> {
        try {
            this.filmesDB.push(filme);
            return filme;
        } catch (err) {
            throw new Error("Falha ao criar o filme!");
        }
    }

    async retrieveAll(): Promise<Array<Filme>> {
        try {
            return this.filmesDB;
        } catch (error) {
            throw new Error("Falha ao retornar os filmes!");
        }
    }

}
export default new FilmeRepository();