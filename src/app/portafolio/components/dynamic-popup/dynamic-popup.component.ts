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
      imgDestacada: '',
      summary:'',
      date:'',
      title : '',
      subTitle:'',
      objetivo:'',
      metodologia:[],
      tecnologias:[],
      poster:[],
      enlace: ''
    };

    idCreator(complemento:string):string{

      let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
      let title = this.card.title.split(" ")[0];

      

      for (let i = 0; i < specialChars.length; i++) {
        title= title.replace(new RegExp("\\" + specialChars[i], 'gi'), '');

    }
      title = title.replace(/ /g,"_");
      title = title.replace(/á/gi,"a");
      title = title.replace(/é/gi,"e");
      title = title.replace(/í/gi,"i");
      title = title.replace(/ó/gi,"o");
      title = title.replace(/ú/gi,"u");
      title = title.replace(/ñ/gi,"n");

      return title + complemento;


  }

}
