import { Component, OnInit } from '@angular/core';
import { KunstenaarsService } from './../../services/kunstenaars.service';
import { Kunstenaar } from './../../domain/kunstenaar';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name= ['hendrik','jan','piet','joris','corneel']
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

}
