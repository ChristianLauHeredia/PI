import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupervisorUsuariosConfirmarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-usuarios-confirmar',
  templateUrl: 'supervisor-usuarios-confirmar.html',
})
export class SupervisorUsuariosConfirmarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorUsuariosConfirmarPage');
  }

     usuarios(){
    this.navCtrl.setRoot('SupervisorUsuariosPage');
  }

}
