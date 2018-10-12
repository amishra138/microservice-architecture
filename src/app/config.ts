import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class Config {
    AuthApi: string = "https://13.232.71.37:8000/api/v1/auth/";
    CampaignApi: string;
    constructor() { }
}