import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name:string="Parul Bhusri";
  title:string="Angular 18";
  courseName:string="Java";
  profession=signal("Sales");
  onClick(){
    this.profession.set("Marketing");
    alert();
  }
  changeCourseName(){
    this.courseName="React Js";
  }
}
