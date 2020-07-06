# :zap: Angular Highcharts Gauges

Angular app using the [Highcharts](https://www.highcharts.com/) API to visualise data.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Version 6.2.6 of npm Highcharts directive angular-highcharts. Latest version of module caused a breaking error.

## :camera: Screenshots

![Example screenshot](./img/gauge.png)

## :signal_strength: Technologies

* [Angular framework v9.1.0](https://angular.io/)
* [highcharts v7.1.2](https://www.highcharts.com/)
* [angular-highcharts v6.2.6](https://www.npmjs.com/package/angular-highcharts)

## :floppy_disk: Setup

Run `npm i` then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* app.component.ts - defines the plotband values and colours.

```typescript
plotBands: [
  { from: 0, to: 200, color: 'green' },
  { from: 200, to: 340, color: 'orange' },
  { from: 340, to: 400, color: 'red' }
]
```

## :cool: Features

* Highcharts gauges have other types of gauges and lots of options that can be configured.

## :clipboard: Status & To-Do List

* Status: basic working app that displays a gauge, configurable from the `app.component.ts` file using values from [Highcharts documentation](https://api.highcharts.com/highcharts/chart#). Updated to Angular 9 and working correctly as before but with `error TS2503: Cannot find namespace 'Highstock'. 20 constructor(options?: Highstock.Options);`
* To-Do: Use in another Angular app with different config that does not cause errors.

## :clap: Inspiration

* [Medium blog by Sunny Sun: How to create impressive looking Gauge Charts using Angular 6, dec 24, 2018](https://medium.com/@sunnysun_5694/how-to-create-impressive-looking-gauge-charts-using-angular-6-8f91dfd6fc5c)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
