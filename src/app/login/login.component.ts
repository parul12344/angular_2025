import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  studentForm:FormGroup;

  constructor(private router:Router){
    this.studentForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl(''),
      remember:new FormControl('')
    })
  }

  onSubmit(){
    if(this.studentForm.value.email != ''){
      localStorage.setItem('userData',this.studentForm.value);
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("User Not Verified");
    }
  }
}
