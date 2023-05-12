export class ExperienciaLab {
    id : number;
    nombreExp : string;
    fechaInicial: string;
    fechaFinal: string;
    descripcionExp : string;

    constructor(nombreExp: string, fechaInicial: string, fechaFinal: string, descripcionExp: string){
        this.nombreExp = nombreExp;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.descripcionExp = descripcionExp;
    }
}
