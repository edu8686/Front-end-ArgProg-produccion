import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLab } from '../model/experienca-lab';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = 'https://backendargprog-j21n.onrender.com/explab';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExperienciaLab[]> {
    return this.httpClient.get<ExperienciaLab[]>(this.expURL + '/lista');

  }

  public detail(id: number): Observable<ExperienciaLab>{
    return this.httpClient.get<ExperienciaLab>(this.expURL + `/detail/${id}`);
  }

  public save(experienciaLab: ExperienciaLab): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/create', experienciaLab);
  }

  public update(id: number, experienciaLab: ExperienciaLab): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/update/${id}`, experienciaLab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/delete/${id}`);
  }
}
