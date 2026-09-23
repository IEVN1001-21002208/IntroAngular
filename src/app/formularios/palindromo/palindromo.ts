import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  numVocales: number = 0;
  vocales: string = '';
  numConsonantes: number = 0;
  consonantes: string = '';
  resultadoPalindromo: string = '';

  analizar(texto: string): void {
    let totalVoc = 0;
    let listaVoc = '';
    let totalCons = 0;
    let listaCons = '';

    let derecho = '';
    let alReves = '';

    const mayus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const minus = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let c of texto) {
      let letra = c;
      for (let i = 0; i < 27; i++) {
        if (c === mayus[i]) {
          letra = minus[i];
        }
      }

      let esLetra = false;
      for (let i = 0; i < 27; i++) {
        if (letra === minus[i]) {
          esLetra = true;
        }
      }

      if (!esLetra) {
        continue;
      }

      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        totalVoc++;
        listaVoc += c + ' ';
      } else {
        totalCons++;
        listaCons += c + ' ';
      }

      derecho = derecho + letra;
      alReves = letra + alReves;
    }

    if (derecho !== '' && derecho === alReves) {
      this.resultadoPalindromo = 'Sí es palíndromo';
    } else {
      this.resultadoPalindromo = 'No es palíndromo';
    }

    this.numVocales = totalVoc;
    this.vocales = listaVoc;
    this.numConsonantes = totalCons;
    this.consonantes = listaCons;
  }
}