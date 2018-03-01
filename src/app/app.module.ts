import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListHeroesComponent } from "./heroes-list/listHeroes.component.";
import { HeroeTableComponent } from "./heroe-table/heroe-table.component";
import { HeroeEditComponent } from "./heroe-edit/heroe-edit.component";


import { ObjectToArray } from "./pipes/object-to-array.pipe";


import { HeroesService } from "./services/heroes.services";


//ngrx
import { StoreModule } from "@ngrx/store";

import { HeroesReducer } from "./reducers/heroes.reducers";

import { HeroesEffects } from "./effects/heroes.effects";

import { EffectsModule } from "@ngrx/effects";

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { TestComponent } from './test/test.component';



const appRoutes: Routes = [
  { path: '', component: ListHeroesComponent },
  { path: 'heroe/edit/:id', component: HeroeEditComponent },
];


 
@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    HeroeEditComponent,
    HeroeTableComponent,
    ObjectToArray,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({ heroes_reducer: HeroesReducer }), 
    //StoreModule.forFeature('heroes_reducer', HeroesReducer), 
    EffectsModule.forRoot([HeroesEffects]),
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrument({maxAge: 20})
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
