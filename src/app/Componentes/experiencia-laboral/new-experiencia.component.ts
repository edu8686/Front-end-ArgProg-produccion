import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experienca-lab';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  fechaInicial: string = '';
  fechaFinal: string = '';
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new ExperienciaLab(this.nombreExp, this.fechaInicial, this.fechaFinal, this.descripcionExp);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadidad");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    
    )
  }

}
