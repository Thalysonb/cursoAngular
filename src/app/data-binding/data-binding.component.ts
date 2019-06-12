import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorDigitado: string;
  valorAtual: string;
  urlImage: string = 'http://lorempixel.com/400/200/nature/';
  isMouseOuver: boolean = false;
  
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
