import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Datum } from '../../interface/data.interface';
import { ChampService } from '../../service/champ.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  public campe: Datum[]=[]
  public campe2: Datum[]=[]
  menu = false;
  constructor(@Inject(DOCUMENT) private document: Document,private service:ChampService) { }

  ngOnInit(): void {

this.buscar();
this.buscar2()


  }

  buscar(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);
      this.campe = k.slice(0,18);
    })
  }
  buscar2(){
    this.service.getheroes()    
    .subscribe((res:any)=>{
      const k:any = Object.values(res);

      this.campe2= k.slice(18,36);
    })
  }

  ons(){
    this.document.documentElement.scrollTop = 0;
  } 

}
