export class Educacion {
    id: number;
    nombreEd: string;
    fechaInicial: string;
    fechaFinal: string; 
    descripcionEd: string;
    imgEd: string;


    constructor(nombreEd: string, fechaInicial: string, fechaFinal: string, descripcionEd: string, imgEd: string) {
        this.nombreEd = nombreEd;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.descripcionEd = descripcionEd;
        this.imgEd = imgEd;
    }
}
