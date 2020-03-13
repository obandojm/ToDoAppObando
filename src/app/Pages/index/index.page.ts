import { iToDo } from './../../Model/interfaces/iToDo';
import { User } from './../../Model/user';
import { ProfilePage } from './../profile/profile.page';

import { DataBaseService } from 'src/app/Services/data-base.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModaltodoPage } from '../modaltodo/modaltodo.page';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public currentUser: User;

  ngOnInit(): void {
    this.currentUser = this.dataBase._userActive;
  }

  constructor(private modalCrtl: ModalController, private dataBase: DataBaseService, private alertController: AlertController) {
    console.log("index current user: ");
   }

   async presentAlertEdit(todo: iToDo) {
     const alert = await this.alertController.create({
       header:'Edit',
       subHeader: 'Current task: ' + todo.msg +'!',
       inputs: [{
        name: 'edit',
        type: 'text',
        placeholder: 'Edit...'
       }],
       buttons: [{
        text: 'OK',
        handler: (inputs: {edit: string}) => {
          this.dataBase.editToDo(todo.id, inputs.edit);
        }
      },
    {
      text: 'CANCEL',
      role: 'cancel',
    }]
   });
   await alert.present();
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

   async presentAlert(todo: iToDo) {
     const alert = await this.alertController.create({
       header: 'Done?',
       subHeader: 'Did you complete the following task?',
       message: todo.msg,
       animated: true,
       buttons: [{
            text: 'OK',
            handler: () => {
              todo.done = true;
              this.dataBase.markToDoAsDone(todo.id);
            }
       },
      {
            text: 'CANCEL',
       }]
     });

     await alert.present();
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

}
