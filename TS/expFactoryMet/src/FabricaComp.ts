import { Computador } from "./model/Computador";
import { Servidor } from "./model/Servidor";
import { PC } from "./model/PC";

export class FabricaComp{
    static createComp(ram: number, ssd: number, cpu: number, tipo: string, preco: number) : Computador | null {
        if(tipo.toLowerCase() == "servidor"){
            return new Servidor(ram, ssd, cpu, tipo, preco, "RAID 0", "CentOS");
        }else if(tipo.toLowerCase() == "pc"){
            return new PC(ram, ssd, cpu, tipo, preco, "Monitor");
        }
        return null;
    }
}