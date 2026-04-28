import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../time.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomepageComponent {
  goals = [{ id: 1, text: '', completed: false }];

  newGoal = '';
  currentTime = '';
  userLocation = '';

  constructor(
    private router: Router,
    private timeService: TimeService,
  ) {}

  ngOnInit() {
    this.timeService.getcurrentTime().subscribe((response: any) => {
      this.currentTime = response.time;
      this.userLocation = response.timeZone;
      console.log('Current Time:', this.currentTime);
      console.log('User Location:', this.userLocation);
    });
  }
  addGoal() {
    console.log('Add Goal clicked');
    console.log('New Goal entered by the user:', this.newGoal);
    console.log(this.goals[this.goals.length - 1]?.id);
    this.goals.push({
      id: this.goals[this.goals.length - 1]?.id + 1 || 1,
      text: this.newGoal,
      completed: false,
    });
    this.newGoal = '';
  }

  deleteGoal(id: number) {
    console.log('Delete Goal clicked for id:', id);
    this.goals = this.goals.filter((goal) => goal.id !== id);
  }
  logout() {
    console.log('Logout clicked');
    this.router.navigate(['/test-signin']);
  }
}
