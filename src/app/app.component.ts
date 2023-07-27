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
    
    if (!this.password) {
      this.passwordStrength = ''; 
    } else if (this.password.length < 6) {
      this.passwordStrength = 'easy'; 
    } else if (this.password.length < 10) {
      this.passwordStrength = 'medium'; 
    } else {
      this.passwordStrength = 'strong'; 
    }
  }
}
