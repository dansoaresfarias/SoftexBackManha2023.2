import { Router } from "express";
import FilmeController from "../controllers/filme.controller";

class FilmeRoutes {
    router = Router();
    controller = new FilmeController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        // Criar um novo filme.
        this.router.post("/filme", this.controller.create);

        // Retornar os generos já cadastrados.
        this.router.get("/filmes", this.controller.findAll);

        // Retorna um filme específico pelo seu id
        this.router.get("/filme/:id", this.controller.findOne);

        // Atualizar um filme pelo seu id
        this.router.put("/filme/:id", this.controller.update);

        // Deleta um filme pelo seu id
        this.router.delete("/filme/:id", this.controller.delete);

        // Adcionar genero a um filme.
        //this.router.post("/filme/addGenero/:id", this.controller.addGenero);
    }
}

export default new FilmeRoutes().router;