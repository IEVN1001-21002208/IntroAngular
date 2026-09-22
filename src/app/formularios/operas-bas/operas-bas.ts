import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1: number = 0;
  num2: number = 0;
  operacion: string = 'sumar'; 
  resultado: number = 0;

  calcular(): void {
    if (this.operacion === 'sumar') {
      this.resultado = Number(this.num1) + Number(this.num2);
    } else if (this.operacion === 'restar') {
      this.resultado = Number(this.num1) - Number(this.num2);
    } else if (this.operacion === 'multiplicar') {
      this.resultado = Number(this.num1) * Number(this.num2);
    } else if (this.operacion === 'dividir') {
      this.resultado = Number(this.num2) !== 0 ? Number(this.num1) / Number(this.num2) : 0;
    }
  }
}