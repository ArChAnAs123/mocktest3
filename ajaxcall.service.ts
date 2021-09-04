
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './Note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxcallService {

  constructor(private htppclient:HttpClient) { }

  GetRequest(): Observable<Array<Note>> {
    return this.htppclient.get<Array<Note>>("http://localhost:3000/users");
  }



}
