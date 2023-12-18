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

    async retrieveAll(): Promise<Array<Genero>> {
        try {
            return this.generosDB;
        } catch (error) {
            throw new Error("Falha ao retornar os gêneros!");
        }
    }

    async retrieveById(generoId: number): Promise<Genero | null> {
        try {
            var encontrado = false;
            var generoEncontrado = null;
            this.generosDB.forEach(element => {            
                if (element.id == generoId) {
                    generoEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return generoEncontrado;
            } 
            return null;         
        } catch (error) {
            throw new Error("Falha ao buscar o gênero!");
        }
    }

    async update(genero: Genero): Promise<number> {
        const { id, nome, published } = genero;
        try {
            var encontrado = false;
            this.generosDB.forEach(element => {
                if (element.id == genero.id) {
                    element.nome = genero.nome;
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

    async delete(generoId: number): Promise<number> {
        try {
            var encontrado = false;
            this.generosDB.forEach(element => {
                if (element.id == generoId) {
                    this.generosDB.splice(this.generosDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o gênero!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.generosDB.length;
            this.generosDB.splice(0, this.generosDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os gêneros!");
        }
    }

}

export default new GeneroRepository();