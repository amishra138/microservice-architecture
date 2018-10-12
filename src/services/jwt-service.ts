import { Injectable } from '@angular/core';
import { LoginToken } from '../models/login-token';

@Injectable({
    providedIn: "root"
})

export class JwtService {

    constructor() { }

    Parse(token: string): LoginToken {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
}