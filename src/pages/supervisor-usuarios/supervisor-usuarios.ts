import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupervisorUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-usuarios',
  templateUrl: 'supervisor-usuarios.html',
})
export class SupervisorUsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorUsuariosPage');
  }

   reasignar(){
    this.navCtrl.setRoot('SupervisorReasignarPage');
  }

   usuarios(){
    this.navCtrl.setRoot('SupervisorUsuariosConfirmarPage');
  }

}
