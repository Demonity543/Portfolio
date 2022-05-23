import { Component, OnInit } from '@angular/core';
import { PersonPortfolio } from './PersonPortfolio';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  person: PersonPortfolio = {
    id: 1,
    name: 'Vadim',
    surname: 'Teslitskiy',
    age: 18,
    address: '5 Main St',
    city: 'Chernivtsi',
    country: 'Ukraine',
    phone: '333-333-3333',
  };
  

  ngOnInit(): void {
  }

}
