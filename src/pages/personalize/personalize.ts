import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Banks } from '../../providers/banks';
 

@Component({
  selector: 'page-personalize',
  templateUrl: 'personalize.html'
})
export class PersonalizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public banks: Banks) {
    console.log(banks);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalizePage');
  }

  backbtn(){
    this.navCtrl.push(MapPage);
  }

}
