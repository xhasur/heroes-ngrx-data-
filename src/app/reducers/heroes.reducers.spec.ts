import { HeroesReducer, initialState } from './heroes.reducers';
import * as actions from '../actions/heroes.action';
import * as HeroesActions from '../actions/heroes.action';
import Heroe from "../models/heroes.model";
export type Action = HeroesActions.Action;




describe('Reducers Tests', () => {

    it('should return the default state', () => {
        const action: any = {};
        const state = HeroesReducer(undefined, action);
        expect(state).toBe(initialState);
    });


    it('should return the delete state', () => {
        const heroesData: any = {
            heroes: [
                {
                    _name: "Anthony Stark",
                    _height: 6.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
                    _nickname: "Iron Man"
                },
                {
                    _name: "Peter Parker",
                    _height: 5.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
                    _nickname: "Spider-Man"
                },
                {
                    _name: "James Howlett",
                    _height: 5.3,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg",
                    _nickname: "Wolverine"
                },
                {
                    _name: "Robert Bruce ",
                    _height: 5.9,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
                    _nickname: "Hulk"
                },
                {
                    _name: "Thor Odinson",
                    _height: 6.6,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
                    _nickname: "Thor"
                },
                {
                    _name: " Piotr Rasputin",
                    _height: 6,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f/standard_xlarge.jpg",
                    _nickname: "COLOSSUS"
                },
                {
                    _name: "Ororo Munroe",
                    _height: 5.11,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg",
                    _nickname: "Storm"
                },
                {
                    _name: "Remy Etienne ",
                    _height: 6.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/40/537baad144c79/standard_xlarge.jpg",
                    _nickname: "Gambit"
                },
                {
                    _name: "Norrin Radd",
                    _height: 6.4,
                    _picture: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png",
                    _nickname: "Silver Surfer"
                }
            ]
        }


        const action: any = {}
        action.type = actions.DELETE_HEROE;
        action.payload = 2;
        const state = HeroesReducer(heroesData, action);
        expect(state.heroes.length).toBe(8);
    });

    it('update state', () => {
        const heroesData: any = {
            heroes: [
                {
                    _name: "Anthony Stark",
                    _height: 6.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
                    _nickname: "Iron Man"
                },
                {
                    _name: "Peter Parker",
                    _height: 5.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
                    _nickname: "Spider-Man"
                },
                {
                    _name: "James Howlett",
                    _height: 5.3,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg",
                    _nickname: "Wolverine"
                },
                {
                    _name: "Robert Bruce ",
                    _height: 5.9,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg",
                    _nickname: "Hulk"
                },
                {
                    _name: "Thor Odinson",
                    _height: 6.6,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
                    _nickname: "Thor"
                },
                {
                    _name: " Piotr Rasputin",
                    _height: 6,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f/standard_xlarge.jpg",
                    _nickname: "COLOSSUS"
                },
                {
                    _name: "Ororo Munroe",
                    _height: 5.11,
                    _picture: "http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg",
                    _nickname: "Storm"
                },
                {
                    _name: "Remy Etienne ",
                    _height: 6.1,
                    _picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/40/537baad144c79/standard_xlarge.jpg",
                    _nickname: "Gambit"
                },
                {
                    _name: "Norrin Radd",
                    _height: 6.4,
                    _picture: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png",
                    _nickname: "Silver Surfer"
                }
            ]
        }


        const action: any = {}
        action.type = actions.UPDATE_HEROE_SUCCESS;
        action.payload = {
            _name: "Norrin Radd",
            _height: 100,
            _picture: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png",
            _nickname: "Silver Surfer"
        };
        const state = HeroesReducer(heroesData, action);
        let _height:number = +state.heroes[8]._height;
        expect(state.heroes.length).toBe(9);
        expect(_height).toBe(100);
    });


});