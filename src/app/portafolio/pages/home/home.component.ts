import { Component } from '@angular/core';
import { PortafolioCard } from '../../interfaces/portafolioCard.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  educacionyhabitos:PortafolioCard = {
    id: 'educyhabModal'
  }

}
