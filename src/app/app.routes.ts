import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"",component:LandingComponent},
    {path:"dash",component:DashboardComponent},
    // {path:"**",component:LandingComponent},
    {path:"empmng",loadChildren:()=>import('./empmng/empmng.module').then(m=>m.EmpmngModule)}

];
