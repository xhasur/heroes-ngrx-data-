import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Heroe from "../models/heroes.model";

@Component({
  selector: 'app-heroe-table',
  templateUrl: './heroe-table.component.html',
  styleUrls: ['./heroe-table.component.scss']
})
export class HeroeTableComponent {
  @Input() heroes: Heroe[];
  @Output() deleteHeroe = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
    var me = this;
  }



}
