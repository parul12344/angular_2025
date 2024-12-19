import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponentComponent } from '../alert-component/alert-component.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
@ViewChild('dynamic',{read:ViewContainerRef}) private dynamic?:ViewContainerRef;

showComponent(){
   this.dynamic?.createComponent(AlertComponentComponent);
}

removeComponent(){
  this.dynamic?.clear();
}
}
