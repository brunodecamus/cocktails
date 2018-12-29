import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  myChart: Chart;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);
    this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: ["New", "In Progress", "On Hold", "?"],
        datasets: [{
          label: '# of Votes',
          data: [1, 2.23, 3.25],
          backgroundColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(54, 0, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false
      }
    });

  }

}
