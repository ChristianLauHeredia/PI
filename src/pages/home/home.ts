import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	splash = true;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  	setTimeout(() =>{
  		this.splash = false;
  	}, 4000);
  }

    login() {
      this.navCtrl.setRoot('UniversitarioHomePage');
    }
    login2() {
      this.navCtrl.setRoot('BibliotecarioHomePage');
    }
    login3() {
      this.navCtrl.setRoot('SupervisorReasignarPage');
    }
    login4() {
      this.navCtrl.setRoot('AdministradorEstadisticasPage');
    }    

  	registro(){
  		this.navCtrl.push('RegistroPage');
  	}
}
