import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupervisorTicketsReasignarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supervisor-tickets-reasignar',
  templateUrl: 'supervisor-tickets-reasignar.html',
})
export class SupervisorTicketsReasignarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupervisorTicketsReasignarPage');
  }
   reasignar(){
    this.navCtrl.setRoot('SupervisorReasignarPage');
  }

}
