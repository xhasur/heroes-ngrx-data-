import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import * as HeroesActions from '../actions/heroes.action';
import { HeroesService } from '../services/heroes.services'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';


@Injectable()
export class HeroesEffects {

    //observable de actions $ al final

    @Effect() loadCOmpanies$ = this.actions$
        .ofType(HeroesActions.GET_HEROES)
        .switchMap(() => {
            return this.heroesService.getHeroes().
                map(heroes => new HeroesActions.GetHeroesSuccessAction(heroes))
        });


    @Effect() deleteHeroe$ = this.actions$
        .ofType(HeroesActions.UPDATE_HEROE)
        .map((data:any) => {
            return  new HeroesActions.UpdateHeroeSuccessAction(data.payload)           
            
        });

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService
    ) { }
}