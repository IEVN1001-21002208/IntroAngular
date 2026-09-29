import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancia } from './formularios/distancia/distancia';
import { Areas } from './formularios/areas/areas';
import { Login } from './formularios/login/login';
import { Palindromo } from './formularios/palindromo/palindromo';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Areas,
    Login,
    Palindromo,
    CinepolisComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}