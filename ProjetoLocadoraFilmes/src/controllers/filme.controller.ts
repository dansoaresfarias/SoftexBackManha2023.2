import { Request, Response } from "express";
import { Filme } from "../models/filme";
import filmeRepository from "../repositories/filme.repository";
import { Genero } from "../models/genero";
import generoRepository from "../repositories/genero.repository";

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
            const generoPrc: Genero | null = await generoRepository.retrieveById(parseInt(req.body.generos[0]));
            if(generoPrc !== null){
                filme.generos[0] = generoPrc;
            }
            const generoSgd: Genero | null = await generoRepository.retrieveById(parseInt(req.body.generos[1]));
            if(generoSgd !== null){
                filme.generos[1] = generoSgd;
            }                
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