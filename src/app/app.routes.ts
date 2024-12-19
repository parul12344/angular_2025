import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"change-detect",component:ChangeDetectionComponent},
    {path:"view-child",component:ViewChildComponent},
    {path:"view-encap",component:ViewEncapsulationComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"dynamic-comp",component:DynamicComponent},
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent}
];
