import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortafolioCard } from '../interfaces/portafolioCard.interface';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  
  telefono:string = "315 276 0283";
  email:string = "nicolasgomez.dev@gmail.com";

  url:string = "http://localhost:4000/api/proyectos/"

  constructor(private http:HttpClient) { }


  getProyectos(): Observable<PortafolioCard[]>{
    return this.http.get<PortafolioCard[]>(this.url);
  }



  getTelefono():string{
    return this.telefono;
  }
  getEmail():string{
    return this.email;
  }

}
