import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  // Selector for the component
  selector: 'app-signup',
  // URL for the HTML file associated with this component
  templateUrl: './signup.page.html',
  // Stylesheets for this component
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  // Define the newUser object to hold the form data
  newUser = {
    firstName: '',  
    lastName: '',  
    email: '',     
    password: '',   
    confirmPassword: '' 
  };

  constructor(private navCtrl: NavController) {}

  /**
   * Method called when the form is submitted
   * @param form - The form object that is submitted
   */
  onSignup(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      // Check if the password and confirm password fields match
      if (this.newUser.password !== this.newUser.confirmPassword) {
        console.log('Passwords do not match.'); // Log a message if passwords do not match
        return; // Exit the function without proceeding further
      }

      // Log a message indicating that the form is valid and showing the user data
      console.log('Signup form is valid', this.newUser);

      // Navigate the user to the home page if form is valid
      this.navCtrl.navigateRoot('/home');
    } else {
      // Log a message indicating that the form is invalid
      console.log('Signup form is invalid');
    }
  }
}
