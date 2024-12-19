import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';

export const routes: Routes = [
    {path:"change-detect",component:ChangeDetectionComponent},
    {path:"view-child",component:ViewChildComponent}
];
