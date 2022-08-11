import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampService } from '../../service/champ.service';
import { switchMap } from 'rxjs';
import { Aatrox } from '../../interface/champ';
import { Location } from '@angular/common';

@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styles: [
  ]
})
export class CampeonComponent implements OnInit {
  
  @Input()camp:Aatrox[]=[];
  constructor(private activate:ActivatedRoute,private service:ChampService,private location: Location) { }

  ngOnInit(): void {
    const batan = document.querySelector('#baton')
    const nav = document.querySelector('#navbar-default')
    batan?.addEventListener('click',()=>{
      console.log('click')
      nav?.classList.toggle('hidden')
      })
    this.activate.params.pipe(
      switchMap(({id})=> this.service.getheroeid(id)
      )
    ).subscribe(heroe=>{
      const k:any = Object.values(heroe);
      this.camp = k;
    })
  }

  back() {
    this.location.back();
  }

}
