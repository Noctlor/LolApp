import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Datum } from '../../interface/data.interface';
import { ChampService } from '../../service/champ.service';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styles: [
  ]
})
export class Lista2Component implements OnInit {
  public campe: Datum[]=[]
  public campe2: Datum[]=[]

  constructor(@Inject(DOCUMENT) private document: Document,private service:ChampService) { }

  ngOnInit(): void {
    
    this.buscar();
    this.buscar2()

  }

  
  buscar(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);

      this.campe = k.slice(36,54);
    })
  }
  buscar2(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);
      this.campe2= k.slice(54,72);
    })
  }
  ons(){
    this.document.documentElement.scrollTop = 0;
  } 
}
