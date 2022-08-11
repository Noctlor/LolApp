import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interface/data.interface';
import { ChampService } from '../../service/champ.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino:string =""
  @Input()campe: Datum[]=[]
  public campeuse: Datum[]=[]

  constructor(public router: Router,private service:ChampService,private activate:ActivatedRoute) { }

  ngOnInit(): void {

  }
  buscando(){
    this.service.getSugerencias(this.termino.trim())
    .subscribe((heroe)=>{
      const k:any = Object.values(heroe);
      this.campe = k;
    
    });
  }
  opcion(event:MatAutocompleteSelectedEvent){
    if(!event.option.value){
      //this.futuse = undefined;
      return
    }
    const hero:Datum = event.option.value;
    this.termino = hero.name;
    this.service.getheroeid(hero.id!)
    .subscribe((heroe)=>{
      const k:any = Object.values(heroe);
      this.campeuse = k;
    })
  } 

  Busqueda(){
    this.activate.params.pipe(
      switchMap(({id})=> this.service.getheroeid(id)
      )
    ).subscribe(heroe=>{
      const k:any = Object.values(heroe);
      this.campe = k;
    })
  }
    ida(){
      this.activate.params.pipe(
        switchMap(({id})=> this.service.getheroeid(id)
        )
      ).subscribe(heroe=>{
        const k:any = Object.values(heroe);
        this.campe = k;



      })

    }


}
