import { Component } from '@angular/core'; 
import { environment } from '../../environments/environments';
import { HostListener } from '@angular/core';

import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);


@Component({ // Add the @Component decorator.
  selector: 'matrix-sumclcktw', 
  templateUrl: './matrixSumClckTw.component.html',
  styleUrls: ['./matrixSumClckTw.component.css']
})


export class SumClckTwComponent { 

  public ngAfterViewInit(): void {
    this.createChartGaugeFront();
    
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  elukas: any;
  elukas2: any;
  private getValue() {
    this.elukas = localStorage.getItem("elujoud");
    this.elukas2 = 20*parseFloat(this.elukas);
    return this.elukas2;
  }

  private createChartGaugeFront(): void {
    const chart = Highcharts.chart('chart-gauge2', {
      chart: {
        type: 'solidgauge',
      },
      title: {
        text: 'Elujõulisuse Indikaator',
      },
      credits: {
        enabled: false,
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '85%'],
        size: '160%',
        background: {
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc',
        },
      },
      yAxis: {
        min: 0,
        max: 100,
        stops: [
          [0.1, '#DF5353'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B'], // red



          //[0.1, '#55BF3B'], // green
          //[0.5, '#DDDF0D'], // yellow
          //[0.9, '#DF5353'], // red
        ],
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16,
        },
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -25,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [{
        name: null,
        data: [this.getValue()],
        dataLabels: {
          format: '<div style="text-align: center"><span style="font-size: 1.25rem">{y}</span></div>',
        },
      }],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getValue());
      //chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    }, 1000);
  }

}