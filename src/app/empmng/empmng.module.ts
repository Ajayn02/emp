import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

export const routes:Routes=[
  {path:"",component:EmplistComponent},
  {path:"addemp",component:AddempComponent},
  {path:"editemp",component:EditempComponent}
]

@NgModule({
  declarations: [
    EmplistComponent,
    AddempComponent,
    EditempComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarComponent
  ]
})
export class EmpmngModule { }
