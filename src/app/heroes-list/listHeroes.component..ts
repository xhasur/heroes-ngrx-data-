import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppState } from "../models/heroes.state";


import * as HeroesActions from '../actions/heroes.action';
import Heroes from "../models/heroes.model";
import { HeroesService } from "../services/heroes.services";
import { selectFeatureCount } from "../reducers/heroes.reducers";

@Component({
    selector: 'app-heroes-list',
    templateUrl: './listHeroes.component.html'
})
export class ListHeroesComponent {
   
   heroes$: Observable<Heroes[]>;
   heroes : any;

constructor(private store: Store<AppState>,serviceHeroes :HeroesService){
  serviceHeroes.getHeroes().subscribe(heroes => {
          this.heroes = heroes;
  });
}


ngOnInit(){
  this.heroes$ = this.store.select(selectFeatureCount);
  this.heroes$.subscribe((heroes) => {
    if(heroes.length == 0){
      this.getHeroes();
    }
  })
}


getHeroes(){
   this.store.dispatch(new HeroesActions.GetHeroesAction())
}


  deleteHeroe(heroeId: number) {
    this.store.dispatch(new HeroesActions.DeleteHeroeAction(heroeId));
  }

}
