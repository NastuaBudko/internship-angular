import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';

  calculatePasswordStrength() {
    // Implement your password strength calculation logic here
    // For example, you can define different conditions to determine the strength
    if (!this.password) {
      this.passwordStrength = ''; // Empty password, no strength
    } else if (this.password.length < 6) {
      this.passwordStrength = 'easy'; // Password with less than 6 characters
    } else if (this.password.length < 10) {
      this.passwordStrength = 'medium'; // Password with 6 to 9 characters
    } else {
      this.passwordStrength = 'strong'; // Password with 10 or more characters
    }
  }
}
