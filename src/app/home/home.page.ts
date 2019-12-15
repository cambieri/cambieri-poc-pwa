import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mockList: any = [
    { cod: "IT", desc: "ITALY", flag: "italy.png" },
    { cod: "FR", desc: "FRANCE", flag: "france.png" },
    { cod: "DE", desc: "GERMANY", flag: "germany.png" },
    { cod: "US", desc: "UNITED STATES", flag: "usa.png" },
    { cod: "SP", desc: "SPAIN", flag: "spain.png" }
  ]

  selectedCountry: any = { cod: "NULL", desc: "NOTHING", flag: "click.png" }

  constructor() { }

  public onCountryClick(country: any) {
    this.selectedCountry = country;
  }

}
