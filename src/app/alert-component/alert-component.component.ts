import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  standalone: true,
  imports: [],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss'
})
export class AlertComponentComponent {
  alertMode:string="Success";
}
