import { FabricaComp } from "./FabricaComp";
import { Servidor } from "./model/Servidor";
import { PC } from "./model/PC";
import { Cliente } from "./model/user";

let servidorSoftex  =  FabricaComp.createComp(32, 1000, 4.8, "servidor", 15000);

(servidorSoftex as Servidor).setSO("CentOS");
(servidorSoftex as Servidor).setSistemaRaid("RAID 1");

let pcSoftex = FabricaComp.createComp(16, 512, 3.2, "pc", 4000);
(pcSoftex as PC).setMonitor("LG 24UHD");

if (servidorSoftex && pcSoftex){
    console.log(servidorSoftex.toString()); 
    console.log(pcSoftex.toString());
}


let onelia = new Cliente("Onélia", "123.345.789-10", 24, "8199997777");
let bigodinho = new Cliente("Thiago Jamor", "123.345.333-11", 34, "81999966666");
let bigodon = Object.create(bigodinho);

let listaUsuarios = new Array<Object>();
listaUsuarios.push(onelia);
listaUsuarios.push(pcSoftex as PC);
listaUsuarios.push(bigodinho);
listaUsuarios.push(servidorSoftex as Servidor);
listaUsuarios.push(bigodon);
bigodon.nome = "Pai de bigodinho";
bigodon.idade = "68";

console.log(listaUsuarios);
console.log(onelia.getGenericCliente("nome"));
