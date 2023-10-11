// app.js

const {Sequelize, DataTypes} = require('sequelize');
const config = require('./config/config.js');
const AtendimentoModel = require('./model/atendimento.js');
const sequelize = new Sequelize(config.development);
const Atendimento = AtendimentoModel(sequelize, DataTypes);
async function run() {

    try {
        //Cadastro de um Atendimento
        const atendimentoDanilo = await Atendimento.create({
            cliente: "Danilo Farias",
            data: '11-10-2023',
            servico: "Corte de Cabelo na Tesoura",
            valor: 50
        });

        //console.log('Atendimento ID 1: ', atendimentoDanilo.toJSON());

        // Leitura do Atendimento
        const atendimentos = await Atendimento.findAll();
        console.log('Atendimentos Cadastrados:', atendimentos); //.map(p => p.toJSON()));

        // Atualizacao de dados do Aluno
        /*const alunosAtualizados = await Alunos.update(
            {nome: 'Luciano Ribeiro Galhardo'},
            {where: {id: alunoCadastrado1.id}}
        );*/

        /*
        // Remocao do aluno 4
        const alunoRemovido = await Alunos.destroy({where: {id: alunoCadastrado4.id}});

        console.log(
            'Aluno Removido: ', alunoRemovido > 0 ? 'Removido com Sucesso' : 'ID não encontrado'
        );

        */

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await Atendimento.sequelize.close();
    }

}
run();