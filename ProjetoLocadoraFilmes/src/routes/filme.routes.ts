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

        // Adcionar genero a um filme.
        //this.router.post("/filme/addGenero/:id", this.controller.addGenero);
    }
}

export default new FilmeRoutes().router;