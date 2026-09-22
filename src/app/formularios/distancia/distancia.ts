import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  distancia: number = 0;

  calcular(): void {
    const difX = Number(this.x2) - Number(this.x1);
    const difY = Number(this.y2) - Number(this.y1);

    const sumaCuadrados = Math.pow(difX, 2) + Math.pow(difY, 2);

    this.distancia = Math.sqrt(sumaCuadrados);
  }
}