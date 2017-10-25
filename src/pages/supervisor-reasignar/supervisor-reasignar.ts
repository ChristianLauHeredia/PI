import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupervisorReasignarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-reasignar',
  templateUrl: 'supervisor-reasignar.html',
})
export class SupervisorReasignarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorReasignarPage');
  }


  reasignar(){
    this.navCtrl.setRoot('SupervisorTicketsReasignarPage');
  }
  usuarios(){
    this.navCtrl.setRoot('SupervisorUsuariosPage');
  }
  
}
