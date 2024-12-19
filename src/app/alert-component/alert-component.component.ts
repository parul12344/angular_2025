import { Component } from '@angular/core';
import { NaPipe } from '../pipes/na.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-component',
  standalone: true,
  imports: [NaPipe,CommonModule],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss'
})
export class AlertComponentComponent {
  test12="hurry";
  alertMode:any=null;
  ngOnInit(){
    this.alertMode="Success";
  }
}
