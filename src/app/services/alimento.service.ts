import { environment } from 'environments/environment';
import { Alimento } from 'app/models/alimento.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {NUTRI_API} from '../app.api'


@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  constructor(private http: Http) { }

  getAlimentos(): Observable<Alimento[]> {
    return this.http.get(`${NUTRI_API}/alimento`)
      .map(response => response.json())
  }
}
