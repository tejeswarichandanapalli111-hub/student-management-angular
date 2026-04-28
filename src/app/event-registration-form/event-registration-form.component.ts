import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-event-registration-form',
  templateUrl: './event-registration-form.component.html',
  styleUrls: ['./event-registration-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class EventRegistrationFormComponent {

  eventregistrationForm = new FormGroup({
    attendeeName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    gender: new FormControl('', Validators.required),
    organisation: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    ticketType: new FormControl('', Validators.required),
    mealPreference: new FormControl('', Validators.required),
    emergencyNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    travellocation: new FormGroup({
      venueCity: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      accommodationRequired: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')])
    }),

    interests: new FormArray([]),
  });
  newInterest = '';
  constructor() { }

  get interests() {
    return this.eventregistrationForm.get('interests') as FormArray;
  }
  addInterest() {
    if (this.newInterest.trim() !== '') {
      this.interests.push(new FormControl(this.newInterest, Validators.required));
      this.newInterest = '';
    }
  }
  removeInterest(index: number) {
    this.interests.removeAt(index);
  }
onsubmit() {
  if (this.eventregistrationForm.valid) {
    console.log('Form Submitted', this.eventregistrationForm.value);
  } else {
    console.log('Form is invalid');
  }
}
}

