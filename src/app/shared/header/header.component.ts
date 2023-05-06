import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PortafolioService } from 'src/app/portafolio/services/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{

  @ViewChild('toastElement') toastElement!:ElementRef<HTMLInputElement>;

  constructor(
    private portafolioService:PortafolioService,
    private router:Router
    
    ){}

  ngOnInit(): void {
    
  }

  toastContent = "";
  clipboardContent = "";
  toast:boolean =false;

  telefono:string  = this.portafolioService.getTelefono();
  email:string = this.portafolioService.getEmail();

  clickTel: boolean = false;
  clickMail: boolean = false;



}
