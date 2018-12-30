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
            pointRadius: 1,
            data: [
              { x: 14, y: 13 },
              { x: 10, y: 20 },
              { x: 23, y: 22 },
              { x: 20, y: 10 },
              { x: 14, y: 13 }
            ],
            // backgroundColor: '#ff6384',
            borderWidth: 2,
            backgroundColor: 'rgba(0, 200, 0, 0.1)',
            borderColor: 'rgb(0, 200, 0)'
          }

          ,

          {
            label: 'Polygone 2',
            showLine: true, // disable for a single dataset
            fill: true,
            pointRadius: [5, 2, 2, 2, 5],
            data: [
              { x: 2, y: 8 },
              { x: 2, y: 20 },
              { x: 20, y: 20 },
              { x: 20, y: 8 },
              { x: 2, y: 8 }
            ],

            borderWidth: 2,
            backgroundColor: 'rgba(100, 0, 100, 0.1)',
            borderColor: 'rgb(100, 0, 100)'
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
        maintainAspectRatio: true,
        animation: {
          duration: 800
      },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });


    console.log(this.myChart.data.datasets);
    setTimeout(() => {
      console.log("3000 ms");
      
      this.myChart.data.datasets.push(

        {
          label: 'Polygone 3',
          showLine: true, // disable for a single dataset
          fill: true,
          pointRadius: 3,
          data: [
            { x: 1, y: 5 },
            { x: 29, y: 6 },
            { x: 31, y: 31 },
            { x: 7, y: 9 },
            { x: 1, y: 5 }
          ],
          // backgroundColor: '#ff6384',
          borderWidth: 3,
          backgroundColor: 'rgba(200, 200, 0, 0.1)',
          borderColor: 'rgb(200, 200, 0)'
        }

      );

      console.log(this.myChart.data.datasets);
      // this.myChart.clear(); // OK
      this.myChart.update();
      this.myChart.resize();
      
    }, 3000);



    


  }


}
