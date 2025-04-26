import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    InputTextModule,
    IftaLabelModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  

  ngOnInit(): void {
    console.log('test');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      const userData = this.loginForm.value;
      console.log('User Data:', userData);
      return;
    }
    else {
      this.router.navigate(['/upload']);
    }
  }
}
