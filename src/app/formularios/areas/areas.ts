import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  figura: string = 'circulo';
  num1: number = 0; 
  num2: number = 0; 
  resultado: number = 0;

  calcular(figura: string, num1: number, num2: number): void {
    let res = 0;

    if (figura === 'circulo') {
      res = 3.1416 * num1 * num1;
    }
    if (figura === 'cuadrado') {
      res = num1 * num1;
    }
    if (figura === 'rectangulo') {
      res = num1 * num2;
    }
    if (figura === 'pentagono') {
      res = (num1 * 5 * num2) / 2;
    }
    
    this.resultado = res;
  }
}