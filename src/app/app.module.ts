import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './Componentes/acerca/acerca.component';
import { EncabezadoComponent } from './Componentes/encabezado/encabezado.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { LogInComponent } from './Componentes/login/login.component';
import { PortfolioComponent } from './Componentes/portfolio/portfolio.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ExperienciaLaboralComponent } from './Componentes/experiencia-laboral/experiencia-laboral.component';
import { HardSoftSkillsComponent } from './Componentes/hard-soft-skills/hard-soft-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './Componentes/footer/footer.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { InterceptorService, interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './Componentes/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './Componentes/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { EditskillComponent } from './Componentes/hard-soft-skills/editskill.component';
import { NewskillComponent } from './Componentes/hard-soft-skills/newskill.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    EncabezadoComponent,
    EducacionComponent,
    ProyectosComponent,
    LogInComponent,
    PortfolioComponent,
    BannerComponent,
    ExperienciaLaboralComponent,
    HardSoftSkillsComponent,
    FooterComponent,
    NavbarComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditskillComponent,
    NewskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    interceptorProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
