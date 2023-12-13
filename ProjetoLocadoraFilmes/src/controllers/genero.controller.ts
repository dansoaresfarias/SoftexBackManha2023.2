import { Request, Response } from "express";
import { Genero } from "../models/genero";
import generoRepository from "../repositories/genero.repository";



export default class GeneroController {

    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            console.log(req.body)
            res.status(400).send({
                message: "Não pode ser vazio o gênero!"
            });
            return;
        }

        try {
            const genero: Genero = req.body;
            if (!genero.published) genero.published = false;

            const savedGenero = await generoRepository.save(genero);

            res.status(201).send(savedGenero);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um gênero."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const generos = await generoRepository.retrieveAll();

            res.status(200).send(generos);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os gêneros."
            });
        }
    }

}