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

    async retrieveById(filmeId: number): Promise<Filme | null> {
        try {
            var encontrado = false;
            var filmeEncontrado = null;
            this.filmesDB.forEach(element => {
                if (element.id == filmeId) {
                    filmeEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return filmeEncontrado;
            }
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar o filme!");
        }
    }

    async update(filme: Filme): Promise<number> {
        const { id, tituloOriginal, tituloPtBr, preco, duracao, ano, faixaEtaria, generos } = filme;
        try {
            var encontrado = false;
            this.filmesDB.forEach(element => {
                if (element.id == filme.id) {
                    element.tituloOriginal = filme.tituloOriginal;
                    element.tituloPtBr = filme.tituloPtBr;
                    element.preco = filme.preco;
                    element.duracao = filme.duracao;
                    element.ano = element.ano;
                    element.faixaEtaria = filme.faixaEtaria;
                    element.generos = filme.generos;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o gênero!");
        }
    }

    async delete(filmeId: number): Promise<number> {
        try {
            var encontrado = false;
            this.filmesDB.forEach(element => {
                if (element.id == filmeId) {
                    this.filmesDB.splice(this.filmesDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o filme!");
        }
    }

}
export default new FilmeRepository();