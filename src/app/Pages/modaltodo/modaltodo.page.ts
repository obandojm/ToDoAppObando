import { ModalController } from '@ionic/angular';
import { DataBaseService } from 'src/app/Services/data-base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modaltodo',
  templateUrl: './modaltodo.page.html',
  styleUrls: ['./modaltodo.page.scss'],
})
export class ModaltodoPage implements OnInit {
  private msg: string;

  constructor(private database: DataBaseService, private modalController: ModalController) { }

  public addToDo(){
    console.log(this.msg);
    this.database.addToDo(this.msg);
    this.closeAddToDo();
  }

  async closeAddToDo() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
