import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor() { }
    timePeriods = [
        {
            value: 1,
            label: 'Today'
        },
        {
            value: 2,
            label: 'Yesterday'
        },
        {
            value: 3,
            label: 'Last 7 days'
        },
        {
            value: 4,
            label: 'Last 30 days'
        },
        {
            value: 5,
            label: 'Last week'
        },
        {
            value: 6,
            label: 'Last month'
        }
    ];
    flightPercent: number = 55;
    hotelPercent: number = 67;
    carPercent: number = 85;
    ngOnInit() {

        setInterval(() => {
            this.flightPercent = Math.floor(Math.random() * 100);
            this.hotelPercent = Math.floor(Math.random() * 100);
            this.carPercent = Math.floor(Math.random() * 100);
        }, 1000);

    }
}