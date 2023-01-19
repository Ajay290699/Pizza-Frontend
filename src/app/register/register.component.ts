import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder){}

  registerForm=this.fb.group({
    firstName:[null,Validators.required],
    lastName:[null,Validators.required],
    email:[null,Validators.required],
    password:[null,Validators.required,Validators.minLength(6)]
  })

  onSubmit(){
    alert("Registered Successfully");
  }

}
