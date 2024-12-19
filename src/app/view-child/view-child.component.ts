import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponentComponent } from '../alert-component/alert-component.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponentComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit {
@ViewChild("profession") professionI?:ElementRef;
@ViewChild(AlertComponentComponent) AlertComp?:AlertComponentComponent;

ngAfterViewInit(){
  console.log(this.professionI?.nativeElement?.value);
  console.log(this.AlertComp?.alertMode);
}
}
