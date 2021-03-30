import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private menuVisible: boolean;
  constructor(
     
 //   location:Location, 
 //   private renderer : Renderer2, 
    private element : ElementRef, 
    private router: Router
  	) { 
      this.location = location;
      this.nativeElement = element.nativeElement;
      this.menuVisible = false;
    }

  ngOnInit(): void {
    var home : HTMLElement = this.element.nativeElement;
    this.toggleButton = home.getElementsByClassName('navbar-toggler')[0];
//    this.router.events.subscribe((event) => {
//      this.menuClose();
//   });
   }
   menuToggle() {
    if (this.menuVisible === false) {
        this.menuOpen();
    } else {
        this.menuClose();
    }
  }

  menuOpen(){}

  menuClose(){}
}
