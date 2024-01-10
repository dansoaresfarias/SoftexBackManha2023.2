-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema locadoraFAP
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema locadoraFAP
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `locadoraFAP` DEFAULT CHARACTER SET utf8 ;
USE `locadoraFAP` ;

-- -----------------------------------------------------
-- Table `locadoraFAP`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Endereco` (
  `idEndereco` INT NOT NULL,
  `UF` VARCHAR(2) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `comp` VARCHAR(45) NULL,
  `cep` VARCHAR(9) NOT NULL,
  PRIMARY KEY (`idEndereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Cliente` (
  `CPF` VARCHAR(14) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sexo` CHAR(1) NOT NULL,
  `dataNasc` DATE NOT NULL,
  `email` VARCHAR(45) NULL,
  `Endereco_idEndereco` INT NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Cliente_Endereco1_idx` (`Endereco_idEndereco` ASC) VISIBLE,
  CONSTRAINT `fk_Cliente_Endereco1`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `locadoraFAP`.`Endereco` (`idEndereco`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Funcionario` (
  `CPF` VARCHAR(14) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `sexo` CHAR(1) NOT NULL,
  `CTPS` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NULL,
  `dataNasc` DATE NOT NULL,
  `dataAdm` DATETIME NOT NULL,
  `dataDem` DATETIME NULL,
  `status` TINYINT NOT NULL,
  `cargo` VARCHAR(45) NOT NULL,
  `Endereco_idEndereco` INT NOT NULL,
  PRIMARY KEY (`CPF`),
  UNIQUE INDEX `CTPS_UNIQUE` (`CTPS` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Funcionario_Endereco1_idx` (`Endereco_idEndereco` ASC) VISIBLE,
  CONSTRAINT `fk_Funcionario_Endereco1`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `locadoraFAP`.`Endereco` (`idEndereco`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Telefone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Telefone` (
  `idTelefone` INT NOT NULL,
  `numero` VARCHAR(11) NULL,
  `Cliente_CPF` VARCHAR(14) NULL,
  `Funcionario_CPF` VARCHAR(14) NULL,
  PRIMARY KEY (`idTelefone`),
  INDEX `fk_Telefone_Cliente_idx` (`Cliente_CPF` ASC) VISIBLE,
  INDEX `fk_Telefone_Funcionario1_idx` (`Funcionario_CPF` ASC) VISIBLE,
  CONSTRAINT `fk_Telefone_Cliente`
    FOREIGN KEY (`Cliente_CPF`)
    REFERENCES `locadoraFAP`.`Cliente` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Telefone_Funcionario1`
    FOREIGN KEY (`Funcionario_CPF`)
    REFERENCES `locadoraFAP`.`Funcionario` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Locacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Locacao` (
  `idLocacao` INT NOT NULL,
  `dataLocacao` DATETIME NOT NULL,
  `dataPrevista` DATETIME NOT NULL,
  `dataDevolucao` DATETIME NULL,
  `multa` DECIMAL(5,2) NULL,
  `valorTotal` DECIMAL(6,2) NOT NULL,
  `formPag` VARCHAR(45) NULL,
  `Cliente_CPF` VARCHAR(14) NOT NULL,
  `Funcionario_CPF` VARCHAR(14) NOT NULL,
  PRIMARY KEY (`idLocacao`),
  INDEX `fk_Locacao_Cliente1_idx` (`Cliente_CPF` ASC) VISIBLE,
  INDEX `fk_Locacao_Funcionario1_idx` (`Funcionario_CPF` ASC) VISIBLE,
  CONSTRAINT `fk_Locacao_Cliente1`
    FOREIGN KEY (`Cliente_CPF`)
    REFERENCES `locadoraFAP`.`Cliente` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Locacao_Funcionario1`
    FOREIGN KEY (`Funcionario_CPF`)
    REFERENCES `locadoraFAP`.`Funcionario` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Status` (
  `idStatus` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idStatus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Filme`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Filme` (
  `idFilme` INT NOT NULL,
  `tituloOriginal` VARCHAR(80) NOT NULL,
  `tituloPT` VARCHAR(80) NULL,
  `preco` DECIMAL(3,2) NOT NULL,
  `duracao` TIME NOT NULL,
  `ano` YEAR NOT NULL,
  `faixaEtaria` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`idFilme`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Midia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Midia` (
  `idMidia` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `secao` VARCHAR(45) NOT NULL,
  `local` VARCHAR(45) NOT NULL,
  `Status_idStatus` INT NOT NULL,
  `Filme_idFilme` INT NOT NULL,
  PRIMARY KEY (`idMidia`),
  INDEX `fk_Midia_Status1_idx` (`Status_idStatus` ASC) VISIBLE,
  INDEX `fk_Midia_Filme1_idx` (`Filme_idFilme` ASC) VISIBLE,
  CONSTRAINT `fk_Midia_Status1`
    FOREIGN KEY (`Status_idStatus`)
    REFERENCES `locadoraFAP`.`Status` (`idStatus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Midia_Filme1`
    FOREIGN KEY (`Filme_idFilme`)
    REFERENCES `locadoraFAP`.`Filme` (`idFilme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`LocacaoMidia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`LocacaoMidia` (
  `Locacao_idLocacao` INT NOT NULL,
  `Midia_idMidia` INT NOT NULL,
  PRIMARY KEY (`Locacao_idLocacao`, `Midia_idMidia`),
  INDEX `fk_Locacao_has_Midia_Midia1_idx` (`Midia_idMidia` ASC) VISIBLE,
  INDEX `fk_Locacao_has_Midia_Locacao1_idx` (`Locacao_idLocacao` ASC) VISIBLE,
  CONSTRAINT `fk_Locacao_has_Midia_Locacao1`
    FOREIGN KEY (`Locacao_idLocacao`)
    REFERENCES `locadoraFAP`.`Locacao` (`idLocacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Locacao_has_Midia_Midia1`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `locadoraFAP`.`Midia` (`idMidia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`Genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`Genero` (
  `idGenero` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idGenero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `locadoraFAP`.`FilmeGenero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `locadoraFAP`.`FilmeGenero` (
  `Filme_idFilme` INT NOT NULL,
  `Genero_idGenero` INT NOT NULL,
  PRIMARY KEY (`Filme_idFilme`, `Genero_idGenero`),
  INDEX `fk_Filme_has_Genero_Genero1_idx` (`Genero_idGenero` ASC) VISIBLE,
  INDEX `fk_Filme_has_Genero_Filme1_idx` (`Filme_idFilme` ASC) VISIBLE,
  CONSTRAINT `fk_Filme_has_Genero_Filme1`
    FOREIGN KEY (`Filme_idFilme`)
    REFERENCES `locadoraFAP`.`Filme` (`idFilme`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Filme_has_Genero_Genero1`
    FOREIGN KEY (`Genero_idGenero`)
    REFERENCES `locadoraFAP`.`Genero` (`idGenero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
