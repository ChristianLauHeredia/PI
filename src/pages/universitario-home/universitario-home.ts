import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UniversitarioHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-universitario-home',
  templateUrl: 'universitario-home.html',
})
export class UniversitarioHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniversitarioHomePage');
  }

  openMenu() {
     this.menu.open();
     this.menu.toggle();
  }

  GoNuevo(){
  	this.navCtrl.setRoot('UniversitarioNuevoTicketPage');
  }
  GoHome(){
    this.navCtrl.setRoot('UniversitarioHomePage');
  }
  GoProceso(){
    this.navCtrl.setRoot('UniversitarioProcesoPage');
  }  
  GoHistorial(){
    this.navCtrl.setRoot('UniversitarioHistorialPage');
  }  
  GoLogout(){
    this.navCtrl.setRoot('HomePage');
  }  


}