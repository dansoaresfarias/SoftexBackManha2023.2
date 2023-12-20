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
            if (generoPrc !== null) {
                filme.generos[0] = generoPrc;
            }
            const generoSgd: Genero | null = await generoRepository.retrieveById(parseInt(req.body.generos[1]));
            if (generoSgd !== null) {
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

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const filme = await filmeRepository.retrieveById(id);
            if (filme) res.status(200).send(filme);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum filme com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o filme com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let filme: Filme = req.body;
        filme.id = parseInt(req.params.id);
        try {
            const generoPrc: Genero | null = await generoRepository.retrieveById(parseInt(req.body.generos[0]));
            if (generoPrc !== null) {
                filme.generos[0] = generoPrc;
            }
            const generoSgd: Genero | null = await generoRepository.retrieveById(parseInt(req.body.generos[1]));
            if (generoSgd !== null) {
                filme.generos[1] = generoSgd;
            }
            const num = await filmeRepository.update(filme);
            if (num == 1) {
                res.send({
                    message: "Filme foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar o filme com o id=${filme.id}. O filme não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o filme com id=${filme.id}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await filmeRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "Filme deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o filme com id=${id}. Talvez o filme não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O filme com id==${id}, não pode ser deletado.`
            });
        }
    }

}