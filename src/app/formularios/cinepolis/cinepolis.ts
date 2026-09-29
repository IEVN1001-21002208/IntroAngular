import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.html'
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number = 1;
  tarjetaCineco: string = 'no';
  cantidadBoletas: number = 0;
  
  valorPagar: number = 0;
  mensajeError: string = '';

  procesar(): void {
    this.mensajeError = '';
    
    if (this.cantidadBoletas > (this.cantidadCompradores * 7)) {
      this.mensajeError = 'Error: Máximo 7 boletas por persona.';
      this.valorPagar = 0;
      return; 
    }

    let total = this.cantidadBoletas * 12.000;

    if (this.cantidadBoletas > 5) {
      total = total - (total * 0.15); 
    } else if (this.cantidadBoletas >= 3) {
      total = total - (total * 0.10); 
    }

    if (this.tarjetaCineco === 'si') {
      total = total - (total * 0.10); 
    }

    this.valorPagar = total;
  }

  salir(): void {
    this.nombre = '';
    this.cantidadCompradores = 1;
    this.tarjetaCineco = 'no';
    this.cantidadBoletas = 0;
    this.valorPagar = 0;
    this.mensajeError = '';
  }
}