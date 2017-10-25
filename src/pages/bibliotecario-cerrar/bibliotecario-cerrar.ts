import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


/**
 * Generated class for the BibliotecarioCerrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotecario-cerrar',
  templateUrl: 'bibliotecario-cerrar.html',
})
export class BibliotecarioCerrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menu: MenuController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecarioCerrarPage');
  }

  openMenu() {
     this.menu.open();
     this.menu.toggle();
  }
  
  GoHome(){
    this.navCtrl.setRoot('BibliotecarioHomePage');
  }
  GoNuevo(){
    this.navCtrl.setRoot('BibliotecarioTomarTicketPage');
  }
  GoProceso(){
    this.navCtrl.setRoot('BibliotecarioTomadosPage');
  }  
  GoHistorial(){
    this.navCtrl.setRoot('BibliotecarioHistorialPage');
  }  

  GoBit(){
    this.navCtrl.setRoot('BibliotecarioBitacoraPage');
  }
}
