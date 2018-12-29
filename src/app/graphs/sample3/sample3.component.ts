import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  myChart: Chart;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);
    this.myChart = new Chart(htmlRef, {
      type: 'scatter',
      data: {
        labels: ["New", "In Progress", "On Hold", "?"],
        datasets: [

          {
            label: 'Polygone 1',
            //xAxisID: 'dskfdsjgklfdg', plus rien
            //yAxisID: 'gg',
            showLine: true, // disable for a single dataset
            fill: true,
            data: [
              { x: 14, y: 13 },
              { x: 10, y: 20 },
              { x: 23, y: 22 },
              { x: 20, y: 10 },
              { x: 14, y: 13 }
            ],
            // backgroundColor: '#ff6384',
            borderWidth: 5,
            borderColor: '#ff6384'
          }

          ,

          {
            label: 'Polygone 2',
            showLine: true, // disable for a single dataset
            fill: false,
            data: [
              { x: 2, y: 8 },
              { x: 2, y: 20 },
              { x: 20, y: 20 },
              { x: 20, y: 8 },
              { x: 2, y: 8 }
            ],

            borderWidth: 1,
            borderColor: '#006384'
          }

        ]
      },
      options: {
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        },
        responsive: true,
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });

  }

  /**
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              data: [{
                  x: -10,
                  y: 0
              }, {
                  x: 0,
                  y: 10
              }, {
                  x: 10,
                  y: 5
              }]
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
  });
   *  */

}
