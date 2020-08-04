import { Component, Pipe, PipeTransform, OnInit, Output, EventEmitter, ViewChild } from '@angular/core'
import { Subject } from 'rxjs';

@Pipe({ name: 'ObjNgFor', pure: false })
export class ObjNgFor implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => Object.assign({ key }, value[key]));
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {

  main: boolean = true;

  objs = {
    cap: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      sausage: 2,
      mashroom: 3,
      cheez: 1,
    },
    onions: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      meat: 1,
      cheez: 1,
    },
    king_one: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      mayo: 1,
      mashroom: 3,
      tomato: 2,
      cheeze: 3,
      dill: 2,
      parsley: 2
    },
    gavay: {
      dough: 1,
      tomato_sauce: 1,
      onion: 2,
      ananas: 1,
      cheez: 2,
    },
    tonno: {
      dough: 1,
      tomato_sauce: 1,
      tuna: 2,
      kappers: 1,
      cheez: 1,
    },
    vegeterian: {
      dough: 1,
      tomato_sauce: 1,
      tomato: 2,
      kappers: 1,
      cucumber: 2,
      onion: 2,
      cheez: 1,
    }
  }

  popular = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  cook(element) {
    this.popular.push(element);
  }

  closeMain(){
    this.main = false;
  }

  showMain(){
    this.main = true;
  }

  onChanged(){
    this.popular = [];
}
}
