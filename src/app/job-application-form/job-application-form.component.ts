import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class JobApplicationFormComponent {
  jobApplicationForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    dateofbirth: new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    experienceyears: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50)]),
    linkedinurl: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
    currentcompany: new FormControl('', Validators.required),
    expectedCTC: new FormControl('', [Validators.required, Validators.min(0)]),
    noticePeriod: new FormControl('', [Validators.required, Validators.min(0), Validators.max(365)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')])
    }),
    technologies: new FormArray([]),
  });

  constructor() { }

  get technologies() {
    return this.jobApplicationForm.get('technologies') as FormArray;
  }

  addTechnology(technology: string) {
    if (technology.trim() !== '') {
      this.technologies.push(new FormControl(technology, Validators.required));
    }
  }
  removeTechnology(index: number) {  
    this.technologies.removeAt(index);  
  } 
  onSubmit() {
    if (this.jobApplicationForm.valid) {
      console.log('Form Submitted', this.jobApplicationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
