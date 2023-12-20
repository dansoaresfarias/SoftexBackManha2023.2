import { Request, Response } from "express";
import { Filme } from "../models/filme";
import filmeRepository from "../repositories/filme.repository";
import { Genero } from "../models/genero";

export default class FilmeController {

    async create(req: Request, res: Response) {
        if (!req.body.tituloOriginal) {
            res.status(400).send({
                message: "Não pode ser vazio o filme!"
            });
            return;
        }

        try {
            const filme: Filme = req.body;
            // Resolver o BO de generoS
            const savedFilme = await filmeRepository.save(filme);
            res.status(201).send(savedFilme);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um filme."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const filmes = await filmeRepository.retrieveAll();
            res.status(200).send(filmes);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os filmes."
            });
        }
    }

    /*async addGenero(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Não pode ser vazio o gênero para o filme!"
            });
            return;
        }

        try {
            const genero: Genero = req.body;
            const idFilme: number = parseInt(req.params.id);
            const addGenero = await filmeRepository.addGenero(genero, idFilme);
            if (addGenero == 1) {
                res.send({
                    message: "Gênero adiciona ao Filme com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível adicionar o Gênero com o id=${genero.id} ao filme.`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar adicionar um gênero ao filme."
            });
        }
    }*/

}