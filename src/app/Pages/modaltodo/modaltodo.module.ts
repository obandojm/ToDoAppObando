import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltodoPageRoutingModule } from './modaltodo-routing.module';

import { ModaltodoPage } from './modaltodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltodoPageRoutingModule
  ],
  declarations: [ModaltodoPage]
})
export class ModaltodoPageModule {}
