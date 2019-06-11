import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos = [];
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training/continuar-curso/angular';
    // for (let i=0; i<this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }
    //buscacno da classe de serviço
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
