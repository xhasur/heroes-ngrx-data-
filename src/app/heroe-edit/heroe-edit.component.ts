import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from "../models/heroes.state";
import { HeroesService } from "../services/heroes.services";
import * as HeroesActions from '../actions/heroes.action';
import Heroes from "../models/heroes.model";
import { selectFeatureCount } from "../reducers/heroes.reducers";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'heroe-edit',
    templateUrl: './heroe-edit.component.html',
    styleUrls: ['./heroe-edit.component.scss']
})
export class HeroeEditComponent implements OnInit {
    heroeForm: FormGroup;
    heroeId: any;
    urlImage: any;
    heroes$: Observable<Heroes[]>;

    constructor(
        private store: Store<AppState>,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: HeroesService,
        private fb: FormBuilder
    ) {

    }

    ngOnInit() {
        this.heroeId = this.activatedRoute.snapshot.params['id'];
        this.buildForm();
        //this.getHeroe(this.heroeId);
        this.getHeroeStore();
    }

    getHeroeStore() {
        this.heroes$ = this.store.select(selectFeatureCount);
        this.heroes$.subscribe((heroes) => {
                 this.heroeForm.patchValue( heroes[this.heroeId]);
                this.urlImage =  heroes[this.heroeId]._picture;
        }
        )
    }


  /*
    getHeroe(heroeId) {
        this.service.getHeroe(heroeId)
            .subscribe(heroe => {
                this.heroeForm.patchValue(heroe);
                this.urlImage = heroe._picture;
            });
    }
    */

    buildForm() {
        this.heroeForm = this.fb.group({
            _name: ['', Validators.required],
            _nickname: [''],
            _height: [''],
            _picture: ['']
        });
    }

    saveHeroe() {
        this.store.dispatch(new HeroesActions.UpdateHeroeAction(this.heroeForm.value));
    }


}
