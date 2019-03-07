import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  // Wraps araund a native element (stickyMenu)  inside the view
  @ViewChild('stickyMenu') menuElement: ElementRef;
  
  sticky: boolean = false;
  menuPosition: any;

  constructor() { }

  ngOnInit() {

  }

  // List of nav links in navbar with its name and path
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

  ngAfterViewInit(){
    // Saves offsetTop element property to this.menuPosition variable
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll',['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if (windowScroll >= this.menuPosition) {
        this.sticky=true;
      } else {
        this.sticky=false;
      }
    }

  
  
  
}
