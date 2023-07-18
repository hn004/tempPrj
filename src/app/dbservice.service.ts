import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { database } from './dataType';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(private http:HttpClient) { }

  addDbValues(data:database){
    return this.http.post("",data);
  }

}
