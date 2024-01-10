// Importando os módulos necessários do TypeORM
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Definindo a entidade "Genero"
@Entity({ name: 'Genero' })
export class Genero {
    // Coluna para a chave primária
    @PrimaryGeneratedColumn({ name: 'idGenero' })
    idGenero: number;

    // Coluna para o nome do gênero
    @Column({ name: 'nome', length: 45, nullable: false })
    nome: string;

    // Constructor
    constructor(idGenero: number, nome: string) {
        this.idGenero = idGenero;
        this.nome = nome;
    }
}