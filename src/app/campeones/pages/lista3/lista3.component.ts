import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Datum } from '../../interface/data.interface';
import { ChampService } from '../../service/champ.service';

@Component({
  selector: 'app-lista3',
  templateUrl: './lista3.component.html',
  styles: [
  ]
})
export class Lista3Component implements OnInit {
  public campe: Datum[]=[]
  public campe2: Datum[]=[]

  constructor(@Inject(DOCUMENT) private document: Document,private service:ChampService) { }

  ngOnInit(): void {
    this.buscar();
    this.buscar2();
  }

  buscar(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);
      this.campe = k.slice(72,90);
    })
  }
  buscar2(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);
      this.campe2= k.slice(90,108);
    })
  }

  ons(){
    this.document.documentElement.scrollTop = 0;
  } 
}
