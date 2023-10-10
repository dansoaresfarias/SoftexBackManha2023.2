const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Atendimento = sequelize.define('Atendimento', {
        cliente: {
            type : DataTypes.STRING,
            allowNull : false
        },
        data: {
            type : DataTypes.DATE,
            allowNull : false
        },
        servico: {
            type : DataTypes.STRING,
            allowNull : false
        },
        valor: {
            type : DataTypes.DECIMAL(7,2),
            allowNull : false
        }
    });

    return Atendimento;
};