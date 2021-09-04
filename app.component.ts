import { Component } from '@angular/core';

class Note {
  name : string;
 
  constructor() {
    this.name = "hello";
  }
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 
  note : Note = new Note();
  notes : Array<Note> = [];

  constructor(){

  }

  ngOnInit(){

  }

  takenot(){console.log(this.note);
    this.notes.push(this.note);
  this.note = new Note();
  
  }
}
