import { Component, OnInit } from '@angular/core';
import { AjaxcallService } from '../ajaxcall.service';
import { Note } from '../Note';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private ajaxcall: AjaxcallService) { }
  note: Note = new Note();
  notes: Array<Note>=[];

  ngOnInit() {

    
    this.ajaxcall.GetRequest().subscribe(response => {
      console.log(response);
      this.notes = response;
   
  
 }, error => {  console.log(error);
  

});
  }

}
