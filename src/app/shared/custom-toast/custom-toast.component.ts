import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styles: [
  ]
})
export class CustomToastComponent {

  @Input() toastContent = "";
  @Input() clipboardContent = "";
  active:boolean = false;
  opening:boolean = false;
  closing: boolean =false;

  clipboardClick(texto:string){

    navigator.clipboard.writeText(texto);

    if(this.active || this.opening || this.closing){
      return;
    }

    this.showToast();


  }

  showToast(){
    
    this.active = true;
    this.opening = true;
    
    const t = setTimeout(() => {
      
      
      this.closing = true;

    }, 2000);

    setTimeout(() => {
      this.active = false;
      this.opening=false;
      this.closing= false;
    }, 2000);

  }

  closeToast(){
    

  }

}
