import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "app";

  ngOnInit() {}

  ngAfterViewInit() {
    this.createSolidGauge1();
  }

  private createSolidGauge1(): void {
    const chart = Highcharts.chart("solid-gauge", {
      chart: {
        type: "solidgauge",
      },
      title: {
        text: "Random Number Solid Gauge",
      },
      credits: {
        enabled: true,
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "85%"],
        size: "160%",
        background: {
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },
      yAxis: {
        min: 0,
        max: 600,
        stops: [
          [0.3, "green"],
          [0.5, "yellow"],
          [0.7, "orange"],
          [0.9, "red"],
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
      series: [
        {
          name: null,
          data: [this.getRandomNumber(0, 600)],
          dataLabels: {
            format:
              '<div style="text-align: center"><span style="font-size: 3rem">{y}</span></div>',
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 600));
    }, 1000);
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
