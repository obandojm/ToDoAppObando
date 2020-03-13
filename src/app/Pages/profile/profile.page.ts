import { User } from './../../Model/user';
import { DataBaseService } from './../../Services/data-base.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { database } from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private currentUser: User;

  constructor(private modalController: ModalController, private dataBase: DataBaseService) { 
    this.currentUser = this.dataBase._userActive;
    console.log("en page perfil");
    console.log(this.dataBase._userActive);
  }

  async closeProfile() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
