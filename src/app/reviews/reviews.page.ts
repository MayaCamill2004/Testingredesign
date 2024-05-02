import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage {
  rating: number = 0;
  feedback: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  rate(stars: number) {
    this.rating = stars;
  }

  async submitReview() {
    // Validate if the user has provided a rating
    if (this.rating === 0) {
      this.presentToast('Please provide a rating.');
      return;
    }

    // Display a success message
    this.presentToast('Review submitted successfully!');

    // Redirect the user to the order confirmed page
    this.navCtrl.navigateForward('/confirmorder');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
