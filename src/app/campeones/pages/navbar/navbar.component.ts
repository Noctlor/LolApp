import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  show = false;
  mobile = false;
 
  constructor() { 
    
  }

  ngOnInit(): void {
    if (window.screen.width < 414) { // 768px portrait
      this.mobile = true;
    }
}
hiden(){
const batan = document.querySelector('#boton')
const nav = document.querySelector('#navbar-default')
nav!.classList.toggle('hidden');
}


}