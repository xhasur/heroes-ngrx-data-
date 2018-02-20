import * as HeroesActions from '../actions/heroes.action';
import Heroe from "../models/heroes.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export type Action = HeroesActions.Action;


export interface State {
    heroes: Heroe[];
};

const initialState: State = {
    heroes: []
};

export function HeroesReducer(state = initialState, action: Action) {
    console.log(state, action);
    switch (action.type) {
        case HeroesActions.GET_HEROES_SUCCESS:
            return {  ...state, heroes: action.payload }

        case HeroesActions.DELETE_HEROE:
            return {...state, heroes: [...state.heroes.slice(0, action.payload),
            ...state.heroes.slice(action.payload + 1)]}
        //return Object.assign({}, state, ...state.splice(action.payload));

        case HeroesActions.UPDATE_HEROE_SUCCESS:
            const updatedItems = state.heroes.map(item => { 
                if (item._name === action.payload._name) {
                    return { ...item, ...action.payload }
                }else{
                    return {...item}
                }
            })
            return {  ...state, heroes: updatedItems } 
        default: {
            return state
        }
    }
}


const selectFeature = createFeatureSelector<State>('heroes_reducer');
export const selectFeatureCount = createSelector(selectFeature, (state: State) => state.heroes);