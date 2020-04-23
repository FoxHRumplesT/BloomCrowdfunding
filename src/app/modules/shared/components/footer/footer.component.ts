import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  public links = {
    main: 'https://www.bloomcrowdfunding.co/',
    terms: 'https://www.bloomcrowdfunding.co/Politicas',
    contact: 'https://www.bloomcrowdfunding.co/Contactenos',
    investor_faq: 'https://www.bloomcrowdfunding.co/Inversores',
    business_faq: 'https://www.bloomcrowdfunding.co/Emprendedores'
  };
  public year = new Date().getFullYear();

}
