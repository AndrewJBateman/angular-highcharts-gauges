import {
	Component,
	ViewChild,
	ElementRef,
	AfterViewInit,
	OnInit
} from '@angular/core';
import { chart } from 'highcharts';

import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'app';

	// Viewchild is a property decorator that configures a view query.
	@ViewChild('chartTarget', {static: false})
	chartTarget: ElementRef;
	options: any;
	chart: any

	ngOnInit() {}

	ngAfterViewInit() {
		this.initOptions();
		this.chart = chart(this.chartTarget.nativeElement, this.options as any);
	}

	initOptions() {
		this.options = {
			chart: {
				type: 'solidgauge'
			},
			title: {
				text: 'Highcharts Solid Gauge'
			},
			pane: {
				startAngle: -90,
				endAngle: 90,
				background: {
					backgroundColor: 'lightgrey',
					innerRadius: '60%',
					outerRadius: '85%',
					shape: 'arc'
				}
			},
			tooltip: {
				enabled: false
			},
			// the value axis
			yAxis: {
				stops: [
					[0.5, 'green'],
					[0.6, 'orange'],
					[0.9, '#DF5353']
				],
				length: 5,
				lineWidth: 0,
				minorTickInterval: null,
				tickAmount: 2,
				title: {
					y: -70
				},
				labels: {
					y: 16
				},
				min: 0,
				max: 400,
				plotBands: [
					{ from: 0, to: 200, color: 'green' },
					{ from: 200, to: 340, color: 'orange' },
					{ from: 340, to: 400, color: 'red' }
				]
			},
			plotOptions: {
				solidgauge: {
					dataLabels: {
						y: 5,
						borderWidth: 0,
						useHTML: true
					}
				}
			},
			series: [
				{
					data: [120]
				}
			]
		};
	}
}
