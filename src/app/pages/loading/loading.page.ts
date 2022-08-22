import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;


  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
mostrarLoading(){
this.showLoading();
setTimeout(()=>{
  this.loading.dismiss();

},3000);

}

async showLoading() {
  this.loading = await this.loadingCtrl.create({
    message: 'Dismissing after 3 seconds...',
  });

  this.loading.present();
}
}
