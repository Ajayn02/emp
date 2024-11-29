import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authguardGuard } from './gaurds/authguard.guard';

export const routes: Routes = [
    {path:"",component:LandingComponent},
    {path:"dash",canActivate:[authguardGuard],component:DashboardComponent},
    // {path:"**",component:LandingComponent},
    {path:"empmng",canActivate:[authguardGuard],loadChildren:()=>import('./empmng/empmng.module').then(m=>m.EmpmngModule)}

];
