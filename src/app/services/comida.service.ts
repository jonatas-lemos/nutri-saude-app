import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NUTRI_API } from 'app/app.api';
import { RefeicaoDto } from 'app/models/refeicaoDto.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http: Http) { }

  
  criarComida(refeicao:RefeicaoDto): Observable<string> {
    return this.http.post(`${NUTRI_API}/comida`,refeicao)
      .map(response => response.json())
  }
}
