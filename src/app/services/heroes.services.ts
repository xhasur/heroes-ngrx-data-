import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import Heroe from "../models/heroes.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroesService {

    API_BASE = 'https://udem.herokuapp.com/heroes';

    heroes: any = [
        { id: 1, _name: 'heroe1', _nickname: 'Heroe numero   1' },
        { id: 2, _name: 'heroe2', _nickname: 'Heroe numero   2' },
        { id: 3, _name: 'heroe3', _nickname: 'Heroe numero  3' },
        { id: 4, _name: 'heroe4', _nickname: 'Heroe numero  4' },
        { id: 5, _name: 'heroe5', _nickname: 'Heroe numero  5' },

    ];

    constructor(private http: Http) { }


    getHeroes() {
        return this.http.get(this.API_BASE)  //para traer todo lo dela  bsase de datos lugares etc..
            .map((resultado) => {
                const data = resultado.json();
                return data;
            })
    }

    public getHeroesMock() {
        return this.heroes;
    }

    errorHandler(error) {
        console.error('CUSTOM ERROR');
        return Observable.throw(error);
    }

    getHeroe(idHeroe) {
        return this.http.get(this.API_BASE)  //para traer todo lo dela  bsase de datos lugares etc..
            .map((resultado) => {
                const data = resultado.json();
                return data[idHeroe];
            })
    }

    /*
    getHeroes2() {        
        return this.http.get("http://udem.herokuapp.com/heroes")
            .map(data =>{ 
                data.json();
            })
            .catch(this.errorHandler);
    }*/
}