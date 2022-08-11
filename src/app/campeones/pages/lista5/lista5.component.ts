import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Datum } from '../../interface/data.interface';
import { ChampService } from '../../service/champ.service';

@Component({
  selector: 'app-lista5',
  templateUrl: './lista5.component.html',
  styles: [
  ]
})
export class Lista5Component implements OnInit {
  public campe: Datum[]=[]
  public campe2: Datum[]=[]

  constructor(@Inject(DOCUMENT) private document: Document,private service:ChampService) { }

  ngOnInit(): void {
    this.buscar();

      }

  buscar(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);
      this.campe = k.slice(144,161);
    })
  }
  ons(){
    this.document.documentElement.scrollTop = 0;
  } 
}
