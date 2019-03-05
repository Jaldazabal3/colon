import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  public navLinks = [
    {
      label: 'Informació',
      path: '/informacio'
    },
    {
      label: 'Consultes',
      path: '/consultes'
    },
  ];

  ngOnInit() {
  }

}
