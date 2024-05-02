import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  userImage: string | null | Blob = null;
  userName: string = 'Maya Camilleri';
  showOptions: boolean = false;


  constructor(private router: Router, private navCtrl: NavController) {}

  // Navigation methods
  goToAddressPage(): void {
    this.router.navigate(['/address']);
  }

  goToOrdersPage(): void {
    this.router.navigate(['/orders']);
  }

  goToCartPage(): void {
    this.navigateTo('/cart');
  }

  goToHomePage(): void {
    this.navigateTo('/home');
  }

  goToFavouritesPage(): void {
    this.navigateTo('/favourites');
  }

  navigateToTintedCare(): void {
    this.navigateTo('/tintedcare');
  }

  navigateToFaceCare(): void {
    this.navigateTo('/facecare');
  }

  goToSearchPage(): void {
    this.navigateTo('/search');
  }

  goToAccountPage(): void {
    this.navigateTo('/account');
  }

  // Sign out and navigate to the login page
  signOut(): void {
    this.router.navigate(['/login']);
  }

  // Helper method to handle navigation to a specified page path
  private navigateTo(pagePath: string): void {
    this.router.navigate([pagePath]);
  }


  imageFile: File | null = null;
// Updated handleFileInput method
handleFileInput(event: any): void {
    // Ensure the event and files are available
    if (event.target && event.target.files && event.target.files.length > 0) {
        // Get the first file from the file input
        const file = event.target.files[0];

        // Check if the file is a valid image file
        if (file.type.startsWith('image/')) {
            // Set the imageFile property
            this.imageFile = file;

            // Create a FileReader to read the file
            const reader = new FileReader();

            // Event handler for when the file is loaded
            reader.onload = (e) => {
                // Set the userImage to the file's content
                this.userImage = e.target?.result as string;

                // Hide options
                this.showOptions = false;
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        } else {
            console.error('Invalid file type. Please upload an image file.');
        }
    } else {
        console.error('No files selected. Please select an image file.');
    }
}


  // Open file input for profile picture upload
  openFileInput(input: HTMLInputElement): void {
    input.click();
    this.showOptions = false;
  }

  // Method to open the camera for profile picture update
  openCamera(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Create a video element to display the video feed
          const video = document.createElement('video');
          video.srcObject = stream;
          video.autoplay = true;
          document.body.appendChild(video);

          // Create a button to capture the photo
          const captureButton = document.createElement('button');
          captureButton.textContent = 'Capture Photo';
          document.body.appendChild(captureButton);

          // Event listener to capture the photo
          captureButton.addEventListener('click', () => {
            video.pause();
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              context.drawImage(video, 0, 0, canvas.width, canvas.height);

              canvas.toBlob(blob => {
                if (blob) {
                  // Create a FormData object to upload the image
                  const formData = new FormData();
                  formData.append('profilePicture', blob, 'profile_picture.jpg');
                  
                  // Send a POST request to upload the image
                  fetch('your-upload-url', {
                    method: 'POST',
                    body: formData,
                  })
                  .then(response => {
                    console.log('Image uploaded successfully');
                  })
                  .catch(error => {
                    console.error('Error uploading image:', error);
                  });
                }
              }, 'image/jpeg');
            }
          });
        })
        .catch(error => {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported on this browser');
    }
  }
}
