import { HeroesEffects } from './heroes.effects';
import * as MyActions from '../actions/heroes.action';
import { Observable } from "rxjs/Observable";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { hot, cold } from 'jasmine-marbles';
import { HeroesService } from "../services/heroes.services";
import { HttpModule } from "@angular/http";
import { GetHeroesSuccessAction, GetHeroesAction } from "../actions/heroes.action";

describe('My Effects', () => {
  let effects: HeroesEffects;
  let heroesS: HeroesService;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        HeroesEffects,
        HeroesService,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(HeroesEffects);
    heroesS = TestBed.get(HeroesService);

  });


 it('should work also', () => {

 const payload: any = {
      heroes: [
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
    };

    actions = new ReplaySubject(1);

    actions.next(new MyActions.GetHeroesAction());

    effects.loadCOmpanies$.subscribe(result => {
      expect(result).toEqual(payload);
    });
  });


it('Heroes Action', () => {

 const payload: any = {
      heroes: [
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
        }
      ]
    };

    const expectedResult = new MyActions.GetHeroesAction();
    effects.loadCOmpanies$.subscribe(result => {
      expect(result).toEqual(payload);
      expect(payload).toEqual(2);
    });

  });


});