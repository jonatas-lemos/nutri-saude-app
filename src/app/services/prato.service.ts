import { LoginService } from './login.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { PratoDto } from 'app/models/prato-dto.model';
import { Observable } from 'rxjs';
import { NUTRI_API } from 'app/app.api';

@Injectable({
  providedIn: 'root'
})
export class PratoService {

  constructor(private http:Http,
    private loginService: LoginService) { 

  }

  getPratos(): Observable<PratoDto>{
    return this.http.get(`${NUTRI_API}/prato/${this.loginService.user.id}`)
    .map(response => response.json())
  }
}
