import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

   // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password')?.value;

  constructor(private router: Router) {
    console.log('Signin form initialized:', this.loginForm);
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log('Signin payload:', this.loginForm.value);
      return;
    }else{
      console.log('Signin payload:', this.loginForm.value);
      this.router.navigate(['/homepage']);
      // https://localhost:4200/homepage
    }
  }
}


