import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { NgxGaugeModule } from 'ngx-gauge';

import { Tab4PageRoutingModule } from './tab4-routing.module';

//import { NgApexchartsModule } from 'ng-apexcharts';

//import { AutoChartComponent } from '../matrixAutoChart/matrixAutoChart.component';
import { CentralComponent } from '../matrixCentral/matrixCentral.component';
import { InClckTwComponent } from '../matrixInClckTw/matrixInClckTw.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,
    NgxGaugeModule
  ],
  declarations: [Tab4Page, CentralComponent, InClckTwComponent]
})
export class Tab3PageModule {}