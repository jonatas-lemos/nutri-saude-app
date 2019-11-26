import { PratoService } from './../services/prato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

 teste :any;
 /*= [ {
    "id": 48,
    "caloriasTotal": 2764,
    "data": "2019-11-26",
    "comidas": [
        {
            "nome": "Macarrão",
            "peso": 200,
            "caloria": 371
        },
        {
            "nome": "Macarrão",
            "peso": 200,
            "caloria": 371
        },
        {
            "nome": "Feijão Azuki",
            "peso": 500,
            "caloria": 128
        },
        {
            "nome": "Feijão Azuki",
            "peso": 500,
            "caloria": 128
        }
    ]
},
{
    "id": 49,
    "caloriasTotal": 228,
    "data": "2019-11-26",
    "comidas": [
        {
            "nome": "Feijão Carioca",
            "peso": 300,
            "caloria": 76
        }
    ]
},
{
    "id": 50,
    "caloriasTotal": 1721,
    "data": "2019-11-26",
    "comidas": [
        {
            "nome": "Feijão Branco",
            "peso": 300,
            "caloria": 142
        },
        {
            "nome": "Feijão Fradinho",
            "peso": 500,
            "caloria": 77
        },
        {
            "nome": "Arroz",
            "peso": 700,
            "caloria": 130
        }
    ]
}
 ]*/
  constructor(private pratoService: PratoService) { }

  ngOnInit() {
    this.pratoService.getPratos()
    .subscribe(data => this.teste = data);
  }

}
