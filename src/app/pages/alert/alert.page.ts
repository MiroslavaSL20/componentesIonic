import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertMultipleButtons(){
  const alert = await this.alertCtrl.create({
    header:'Alert',
    subHeader:'Subtitle',
    message:'This is an alert message.',
    buttons:[
      {
      text: 'OK',
      handler: () => {
        console.log('click en ok!')
      }
    },
    {
      text: 'Cancelar',
      role: 'cancel'
    }
  ]
  });
  await alert.present();
}
async presentAlertPrompt() {
  const alert = await this.alertCtrl.create({
    header: 'Please enter your info',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
        cssClass:'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'OK',
        handler: (data:any) => {
          console.log(data);
        }
      }
    ],
    inputs: [
      {
        placeholder: 'Name',
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself',
      },
    ],
  });

  await alert.present();
}
}

