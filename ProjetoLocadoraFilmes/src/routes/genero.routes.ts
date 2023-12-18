import { Router } from "express";
import GeneroController from "../controllers/genero.controller";


class GeneroRoutes {
  router = Router();
  controller = new GeneroController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo genero.
    this.router.post("/genero", this.controller.create);

    // Retornar os generos já cadastrados.
    this.router.get("/generos", this.controller.findAll);

    // Retorna um genero específico pelo seu id
    this.router.get("/genero/:id", this.controller.findOne);

    // Atualizar um genero pelo seu id
    this.router.put("/genero/:id", this.controller.update);

    // Deleta um genero pelo seu id
    this.router.delete("/genero/:id", this.controller.delete);

    // Deleta todos os generos
    this.router.delete("/generos/", this.controller.deleteAll);
  }
}

export default new GeneroRoutes().router;