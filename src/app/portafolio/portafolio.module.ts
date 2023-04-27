import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToastComponent } from './components/custom-toast/custom-toast.component';
import { DynamicPopupComponent } from './components/dynamic-popup/dynamic-popup.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomToastComponent,
    DynamicPopupComponent,
    HomeComponent
  ],
  exports: [
    CustomToastComponent,
    DynamicPopupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PortafolioModule { }
