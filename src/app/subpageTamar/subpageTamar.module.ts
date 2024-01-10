import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpageTamarPageRoutingModule } from './subpageTamar-routing.module';

import { SubpageTamarPage } from './subpageTamar.page';

//import { ClientRobotComponent } from '../matrixClientRobot/matrixClientRobot.component';
//import { CClientRobotComponent } from '../matrixClientRobot/matrix-robot-msg/matrix-robot-msg.component';

import { TamarComponent } from '../matrixTamar/matrixTamar.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpageTamarPageRoutingModule
  ],
  declarations: [SubpageTamarPage, TamarComponent]
})
export class SubpagePageModule {}