import { LoginService } from './../services/login.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private loginService :LoginService) { }

  ngOnInit() {
    this.loginService.mostrarMenuEmiter.subscribe(
        mostrar => this.mostrarMenu = mostrar

    )
  }

}
