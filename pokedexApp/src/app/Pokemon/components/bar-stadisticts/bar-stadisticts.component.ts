import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bar-stadisticts',
  templateUrl: './bar-stadisticts.component.html',
  styleUrls: ['./bar-stadisticts.component.css']
})
export class BarStadistictsComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  @Input()listStats!: number[];
  @Input()title!: string;
  public chartOptions!: ChartOptions;

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Stats",
          data: this.listStats
        }
      ],
      chart: {
        toolbar:{
          show: false
        },

        height: 250,
        type: "bar",

      },
      title:{
        text: this.title
      },

      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "70%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          "HP",
          "Ataque",
          "Defensa",
          "Ataque Especial",
          "Defensa Especial",
          "Velocidad"
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }




}
