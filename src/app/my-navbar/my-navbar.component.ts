import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent implements OnInit {
  @Input('parentData') public textToParent;
  @Output() public childEvent = new EventEmitter();
  private itemsMenu: object = {
    item1: 'Dipendenti',
    item2: 'Contatti',
    item3: 'Registrazione',
    item4: 'JsonServer'
  };
  /*private itemMenuDropdown: object = {
    titleDropdown : 'Example Materials',
    item1 : 'Action',
    item2 : 'Another action',
    item3 : 'Something else here'
  };*/
  constructor() { }

  ngOnInit() {
  }
  firstEvent() {
    this.childEvent.emit('Text to children ad parent');
  }
}
