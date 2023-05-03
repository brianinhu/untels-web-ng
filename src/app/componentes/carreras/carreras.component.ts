import { Component } from '@angular/core';
import { Carrera } from 'src/app/clases/carrera/carrera';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent {
  carreras!:Carrera[];
  constructor() {
    this.carreras=[
      {codigo: 'IS1C1', nombre: 'Matemáticas I', ciclo: 'I', creditos: 5, horario:'Mañana'},
      {codigo: 'IS1C2', nombre: 'Teoría de la Ciencia I', ciclo: 'I', creditos: 3, horario:'Tarde'},
      {codigo: 'IS1C3', nombre: 'Realidad Mundial', ciclo: 'I', creditos: 3, horario:'Noche'},
      {codigo: 'IS1C4', nombre: 'Filosfía', ciclo: 'I', creditos: 3, horario:'Noche'},
      {codigo: 'IS1C5', nombre: 'Comprensión y producción de textos', ciclo: 'I', creditos: 4, horario:'Mañana'},
      {codigo: 'IS1C6', nombre: 'Introducción a la Programación', ciclo: 'I', creditos: 5, horario:'Tarde'}
    ]
  }
}
