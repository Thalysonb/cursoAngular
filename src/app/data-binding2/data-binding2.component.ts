import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding2',
  templateUrl: './data-binding2.component.html',
  styleUrls: ['./data-binding2.component.css']
})
export class DataBinding2Component implements OnInit {
  valorDigitado: string;
  valorAtual: string;
  urlImage: string = 'http://lorempixel.com/400/200/nature/';
  isMouseOuver: boolean = false;
  nomeCurso ='Java';
  pessoa: any ={
    nome: 'thalyson',
    idade: '21'
  }
  getUrl(){
    return 'http://loiane.training.com';
  }

  botaoClicado(){
    alert("O botão foi clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvaValor(valor){
    this.valorDigitado = valor;
  }

  onMouseOuverOut(){
    this.isMouseOuver = !this.isMouseOuver
  }
  constructor() { }

  ngOnInit() {
  }

}
