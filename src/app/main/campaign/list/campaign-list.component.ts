import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'campaign-list',
    templateUrl: './campaign-list.component.html',
    styleUrls: ['./campaign-list.component.css']
})

export class CampaignListComponent implements OnInit {
    campaignValidity: Array<any> = [
        { value: '1', label: 'Today' },
        { value: '2', label: 'Seven days' },
        { value: '3', label: 'Current month' },
        { value: '4', label: 'Previous month' },
        { value: '5', label: 'Custom range' }
    ];
    campaignPurpose: Array<any> = [
        { value: '1', label: 'Awareness' },
        { value: '2', label: 'Sales' },
        { value: '3', label: 'Registration' },
        { value: '4', label: 'Downloads' }
    ];
    campaignTypes: Array<any> = [
        { value: '1', label: 'Coupon' },
        { value: '2', label: 'Discount' },
        { value: '3', label: 'eWallet' },
        { value: '4', label: 'Spin Wheel' },
        { value: '5', label: 'Points Acceleration' },
        { value: '6', label: 'Brand' },
        { value: '7', label: 'Mark Up/Mark Down' }
    ];
    destinations: Array<any> = [
        { value: '1', label: 'U.A.E' },
        { value: '2', label: 'Saudia' },
        { value: '3', label: 'Bahrain' },
        { value: '4', label: 'Oman' }
    ];
    languages: Array<any> = [
        { value: '1', label: 'Arabic' },
        { value: '2', label: 'Chinese' },
        { value: '3', label: 'Spanish' },
        { value: '4', label: 'English' },
        { value: '5', label: 'Hindi' },
        { value: '6', label: 'Portuguese' },
        { value: '7', label: 'Russian' },
        { value: '7', label: 'Japanese' }
    ];
    branches: Array<any> = [
        { value: '1', label: 'Branch One' },
        { value: '2', label: 'Branch Two' },
        { value: '3', label: 'Branch Three' },
        { value: '4', label: 'Branch Four' }
    ];
    campaignTags: Array<any> = [
        { value: '1', label: 'Acquisition' },
        { value: '2', label: 'Redemptions' },
        { value: '3', label: 'AuthEmail' },
        { value: '4', label: 'Conversion' }
    ];
    devices: Array<any> = [
        { value: '1', label: 'Desktop' },
        { value: '2', label: 'Tablet' },
        { value: '3', label: 'Mobile' }
    ];
    constructor() { }
    ngOnInit() { }
}