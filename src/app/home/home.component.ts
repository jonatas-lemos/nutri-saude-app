import { LoginService } from './../services/login.service';
import { PratoService } from './../services/prato.service';
import { AlimentoService } from './../services/alimento.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Alimento } from 'app/models/alimento.model';
import { Comida } from 'app/models/comida.model';
import { ComidaService } from 'app/services/comida.service';
import { RefeicaoDto } from 'app/models/refeicaoDto.model';
import { AlimentoDto } from 'app/models/alimento-dto.model';


@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  alimento: Alimento =new Alimento();
  peso: Number;
  alimentoSelected:Number;
  comidas:Comida[]=[];
  alimentos: Alimento[];
  refeicaodto:RefeicaoDto = new RefeicaoDto();
  alimentosDto:AlimentoDto[]=[];
  alimentoDto:AlimentoDto;
  closeResult: string;

  constructor(private alimentoService: AlimentoService,
              private comidaService: ComidaService,
              private loginService: LoginService

            ) { }

  ngOnInit() {
    this.alimentoService.getAlimentos().subscribe(data => this.alimentos = data)
  }

  adicionarAoPrato(){
    this.alimento = this.alimentos.find(a=> a.id == this.alimentoSelected);
    let comida = new Comida();
    comida.alimento = this.alimento;
    comida.peso = this.peso;
    this.comidas.push(comida);
  }
  remover(comida:Comida){
    this.comidas = this.comidas.filter(item => item !== comida);
  }

  enviarComida(){
  
    this.comidas.forEach(a=>{
      this.alimentoDto = new AlimentoDto();
      this.alimentoDto.id = a.alimento.id;
      this.alimentoDto.peso = a.peso;
      this.alimentosDto.push(this.alimentoDto);
    });
    this.refeicaodto.idUsuario = this.loginService.user.id;
    this.refeicaodto.alimentos = this.alimentosDto;

    this.comidaService.criarComida(this.refeicaodto)
      .subscribe( data => {
        this.comidas = [];
        this.refeicaodto=new RefeicaoDto();
        this.alimentosDto=[]
      })
  }
}
