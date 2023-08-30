# :zap: Angular Highcharts Gauges

* Angular app using the [Highcharts](https://www.highcharts.com/) API to visualise data.
* Displays a gauge, configurable from the `app.component.ts` file using values from [Highcharts documentation](https://api.highcharts.com/highcharts/chart#).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-highcharts-gauges?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-highcharts-gauges?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-highcharts-gauges?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-highcharts-gauges?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Highcharts Gauges](#zap-angular-highcharts-gauges)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Latest versions of all dependencies used, including highcharts. No errors
* Uses the Highcharts solid gauge module
* Random number function used to create data for gauge

## :camera: Screenshots

![Example screenshot](./img/gauge.png)

## :signal_strength: Technologies

* [Angular framework v16](https://angular.io/)
* [Highcharts v11](https://www.highcharts.com/)

## :floppy_disk: Setup

* `npm i` to install dependencies
* `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* `ng build` to create a build file

## :computer: Code Examples

* extract from `app.component.ts` - function to create a solid gauge

```typescript
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
```

## :cool: Features

* [Highcharts gauges](https://www.highcharts.com/) have other types of gauges and lots of options that can be configured.

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Nothing

## :clap: Inspiration

* [Highcharts Solid Gauge Documentation](https://api.highcharts.com/highcharts/plotOptions.solidgauge?_ga=2.254467530.33117973.1645276249-1074080791.1645276249)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
