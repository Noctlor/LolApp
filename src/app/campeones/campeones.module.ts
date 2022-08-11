import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { CampeonComponent } from './pages/campeon/campeon.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListaComponent } from './pages/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Lista2Component } from './pages/lista2/lista2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Lista3Component } from './pages/lista3/lista3.component';
import { Lista4Component } from './pages/lista4/lista4.component';
import { Lista5Component } from './pages/lista5/lista5.component';

import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './pages/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon'; 

import {MatButtonModule} from '@angular/material/button'; 

const ruta:Routes=[
  

  {path:'lista',component:ListaComponent},
  {path:'',redirectTo:'lista', pathMatch:'full'},
  {path:'lista2',component:Lista2Component},
  {path:'lista3',component:Lista3Component},
  {path:'lista4',component:Lista4Component},
  {path:'lista5',component:Lista5Component},
  {path:'buscar',component:BuscarComponent},
  {path:'lista/:id', component:CampeonComponent},
  {path:'lista2/:id', component:CampeonComponent},
  {path:'lista3/:id', component:CampeonComponent},
  {path:'lista4/:id', component:CampeonComponent},
  {path:'lista5/:id', component:CampeonComponent},
  {path:'buscar/:id', component:CampeonComponent},
  {path:'**', redirectTo:'lista'},
  

]


@NgModule({
  declarations: [
    ComponentsComponent,
    CampeonComponent,
    BuscarComponent,
    ListaComponent,
    Lista2Component,
    Lista3Component,
    Lista4Component,
    Lista5Component,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ruta),
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatButtonModule

  ],
  exports:[
    RouterModule,
  ]
})
export class CampeonesModule { }
