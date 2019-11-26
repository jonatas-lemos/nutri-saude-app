import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user.model';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('',[Validators.required, Validators.email]),
      password: this.fb.control('',[Validators.required])
    })
  }

  login(){
    let user = new User();
    user.email = this.loginForm.value.email;
    user.senha = this.loginForm.value.password;
    this.loginService.login(user)
    .subscribe(data=>{  
             this.loginService.user = data,
              this.router.navigate([''])
            });
  }

}
