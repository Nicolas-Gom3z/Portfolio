import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  telefono:string = "315 276 0283";
  email:string = "nicolasgomez.dev@gmail.com";

  constructor() { }



  getTelefono():string{
    return this.telefono;
  }
  getEmail():string{
    return this.email;
  }

}
