import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  //styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string="";

  showImage():void{
    this.muestraImagen=!this.muestraImagen;
  }


  heroes:IHeroes[]=[

  {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Son Goku',
    description:'Kame Hame Ha',
    race:'Saiyan',
    ki:900000000
  },
  
  {
    imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
    nombre:'Vegeta',
    description:'Príncipe de los Saiyans',
    race:'Saiyan',
    ki:1984000000
  },

  {
    imagen:'https://dragonball-api.com/characters/gohan.webp',
    nombre:'Son Gohan',
    description:'El primer Saiyan en llegar a SS2',
    race:'Saiyan',
    ki:45000000
  },

  {
    imagen:'https://dragonball-api.com/characters/Gotenks_Artwork.webp',
    nombre:'Gotenks',
    description:'Fusión entre Goten y Trunks',
    race:'Saiyan',
    ki:348000000
  }
  ]

}
