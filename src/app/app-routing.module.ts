import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Componentes/login/login.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { NewExperienciaComponent } from './Componentes/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { NewskillComponent } from './Componentes/hard-soft-skills/newskill.component';
import { EditskillComponent } from './Componentes/hard-soft-skills/editskill.component';
import { EditAcercaComponent } from './Componentes/acerca/edit-acerca.component';

const routes: Routes = [
  {path:'login', component:LogInComponent},
  {path:'', component:PortfolioComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeducacion', component:NeweducacionComponent},
  {path: 'editeducacion/:id', component:EditeducacionComponent},
  {path: 'newskill', component: NewskillComponent},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'editAcerca/:id', component: EditAcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
