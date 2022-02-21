import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY>100) {
      this.navBar=true;
    } else {
      this.navBar=false;
    }

  }
}
