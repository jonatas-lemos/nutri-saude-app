import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from './../models/user.model';
import { NUTRI_API } from './../app.api';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:User;

  public mostrarMenuEmiter = new EventEmitter<boolean>();

  constructor(private http: Http,
    private router: Router) { }

  isLoggedIn(): boolean{
    console.log(this.user !== undefined)
    this.mostrarMenuEmiter.emit(this.user !== undefined);
    return this.user !== undefined;
  }

  login(usuario: User): Observable<User>{
    return this.http.get(`${NUTRI_API}/auth/login/${usuario.email}/${usuario.senha}`)
    .map(response => response.json())
  }

  handleLogin(){
    this.router.navigate(['/login']);
  }
}
