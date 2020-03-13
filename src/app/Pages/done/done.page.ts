import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DataBaseService } from 'src/app/Services/data-base.service';
import { User } from 'src/app/Model/user';
import { ProfilePage } from '../profile/profile.page';
import { ModaltodoPage } from '../modaltodo/modaltodo.page';
import { iToDo } from 'src/app/Model/interfaces/iToDo';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {

  public currentUser: User;

  ngOnInit(): void {
  }

  constructor(private modalCrtl: ModalController, private dataBase: DataBaseService, private alertController: AlertController) {
    this.currentUser = this.dataBase._userActive;
    console.log("index current user: ");
   }

   async presentProfile() {
    const modal = await this.modalCrtl.create({
      component: ProfilePage
    });
    return await modal.present();
  }

  async presentModalTodo() {
    const modal = await this.modalCrtl.create({
      component: ModaltodoPage
    });
    return await modal.present();
  }

  async presentAlertDelete(todo: iToDo) {
    const alert = await this.alertController.create({
      header: 'Delete',
      subHeader: 'You are going to delete one task, are you sure?',
      message: todo.msg,
      animated: true,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.dataBase.deleteToDo(todo.id);
        }
      },
    {
      text: 'CANCEL',
    }]
   });
   await alert.present();
  }
}
