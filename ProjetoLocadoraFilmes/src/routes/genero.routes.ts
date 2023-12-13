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
  }
}

export default new GeneroRoutes().router;