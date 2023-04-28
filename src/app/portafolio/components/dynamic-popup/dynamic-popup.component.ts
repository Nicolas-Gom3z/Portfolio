import { Component, Input } from '@angular/core';
import { PortafolioCard } from '../../interfaces/portafolioCard.interface';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styles: [
  ]
})
export class DynamicPopupComponent {

  // @Input() id = "";
  // @Input() title = "";
  // @Input() subTitle="";
  // @Input() objetivo="";
  // @Input() metodologia="";
  // @Input() tecnologias= [];

  @Input() card:PortafolioCard ={
      id : '',
      imgDestacada: '',
      summary:'',
      date:'',
      title : '',
      subTitle:'',
      objetivo:'',
      metodologia:[],
      tecnologias:[],
      poster:'',
      enlace: ''
    };



}
