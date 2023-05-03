import { Component } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos!:Alumno[];
  
  constructor(){
   this.alumnos = [
    {codigo: 1001, nombre: 'Juan', apellido: 'Correa', edad: 18, carrera: 'Ingeniería de Sistemas'},
    {codigo: 1002, nombre: 'Alex', apellido: 'Farfán', edad: 22, carrera: 'Ingeniería Ambiental'},
    {codigo: 1003, nombre: 'David', apellido: 'Meneses', edad: 16, carrera: 'Ingeniería Mecánica y Eléctrica'},
    {codigo: 1004, nombre: 'Sofía', apellido: 'Jaúregui', edad: 21, carrera: 'Ingeniería Eléctrica y Telecomunicaciones'},
    {codigo: 1005, nombre: 'Rebeca', apellido: 'Cobacho', edad: 27, carrera: 'Administración de Empresas'}
   ] 
  }
}
