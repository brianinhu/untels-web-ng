import { Component } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor/profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})

export class ProfesoresComponent {
  profesores!:Profesor[];
  
  constructor() {
    this.profesores = [
      {codigo: 1001, nombre: 'Mario Edison', apellido: 'Ninaquispe Soto', grado_academico: 'Licenciado', turno: 'Mañana'},
      {codigo: 1002, nombre: 'Victor Ramiro', apellido: 'Salas Zevallos', grado_academico: 'Doctor', turno: 'Tarde'},
      {codigo: 1003, nombre: 'Maruja Emelita', apellido: 'Blas Rebaza', grado_academico: 'Magister', turno: 'Noche'},
      {codigo: 1004, nombre: 'Alfredo Cesar', apellido: 'Larios Franco', grado_academico: 'Bachiller', turno: 'Mañana'},
      {codigo: 1005, nombre: 'Teodoro Neri', apellido: 'Diaz Leyva', grado_academico: 'Ingeniero', turno: 'Tarde'},
    ]
  }
}
