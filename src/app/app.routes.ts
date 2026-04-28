import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './home/home.component';
import { ProfileFormPracticeComponent } from './profile-form-practice/profile-form-practice.component';
import { EventRegistrationFormComponent } from './event-registration-form/event-registration-form.component';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
 
export const routes: Routes = [
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"profile-form-practice",
    component:ProfileFormPracticeComponent
  },
  {
    path:"event-registration-form",
    component:EventRegistrationFormComponent
  },
  {
    path:"job-application-form",
    component:JobApplicationFormComponent
  }

];