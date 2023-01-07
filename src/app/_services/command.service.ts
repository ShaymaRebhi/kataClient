import { Injectable } from '@angular/core';
import {Command} from "../Model/command";
import {HttpClient} from "@angular/common/http";
import {product} from "../Model/product";

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  url= " http://localhost:8080/taxcalculator"
  constructor(private http: HttpClient) {}

  calculate(command : product[]){
    return this.http.post(this.url, command);
  }
}
