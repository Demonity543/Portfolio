import { Component, OnInit } from '@angular/core';
import { SkilsAndKnowledge } from './Skils';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent implements OnInit {

  skill: SkilsAndKnowledge = {
    email: 'vadimteslitskiy0@gmail.com',
    twitter: '-none-',
    github: 'https://github.com/Demonity543',
    skils: ['.Net Framework','HTML','CSS','JS','TS','Angular','PHP','SQL','UML','C','C++','C#','Magento 2'],
    school: '2-year ItStep Academy',
  };
  title = 'Skills';
  constructor() { }

  ngOnInit(): void {
  }

}
