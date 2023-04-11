import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomToastComponent,
    HomeComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
