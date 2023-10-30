import { FabricaComp } from "./FabricaComp";
import { Servidor } from "./model/Servidor";
import { PC } from "./model/PC";

let servidorSoftex  =  FabricaComp.createComp(32, 1000, 4.8, "servidor", 15000);

(servidorSoftex as Servidor).setSO("CentOS");
(servidorSoftex as Servidor).setSistemaRaid("RAID 1");

let pcSoftex = FabricaComp.createComp(16, 512, 3.2, "pc", 4000);
(pcSoftex as PC).setMonitor("LG 24UHD");

if (servidorSoftex && pcSoftex){
    console.log(servidorSoftex.toString()); 
    console.log(pcSoftex.toString());
}
