import Heroes, { Heroe } from '../models/heroes.model'; 
import {Action} from '@ngrx/store'; 

export const GET_HEROES = '[Todo] GET_HEROES'; 
export const GET_HEROES_SUCCESS = "[Todo] GET_HEROES_SUCCESS"; 
//export const GET_HEROES_ERROR = "[Todo] GET_HEROES_ERROR"; 


export class GetHeroesAction{
    readonly type = GET_HEROES; 
    constructor(){} 
} 

export class GetHeroesSuccessAction{
    readonly type = GET_HEROES_SUCCESS; 
    constructor(public payload: Heroes[]){} ; 
} 

/*
export class GetHeroesError {
    readonly type = GET_HEROES_ERROR; 
} 
*/

export const DELETE_HEROE = '[Todo] DELETE_HEROE';
export const DELETE_HEROE_SUCCESS = '[Todo] DELETE_HEROE_SUCCESS';


export class DeleteHeroeAction {
    readonly type = DELETE_HEROE;
    constructor(public payload: number) { }
}


export class DeleteHeroeSuccessAction {
    readonly type = DELETE_HEROE_SUCCESS;
    constructor(public payload: number) { }
}

export const UPDATE_HEROE = '[Todo] UPDATE_HEROE';
export const UPDATE_HEROE_SUCCESS = '[Todo] UPDATE_HEROE_SUCCESS';

export class UpdateHeroeAction {
    readonly type = UPDATE_HEROE;
    constructor(public payload: Heroe) { }
}


export class UpdateHeroeSuccessAction {
    readonly type = UPDATE_HEROE_SUCCESS;
    constructor(public payload: Heroe) { }
}


export type Action = GetHeroesAction | 
                     GetHeroesSuccessAction | 
                     DeleteHeroeAction | 
                     DeleteHeroeSuccessAction |
                     UpdateHeroeAction |
                     UpdateHeroeSuccessAction;