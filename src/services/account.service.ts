import { Injectable } from '@angular/core';
import { Config } from '../app/config';
import { Login, LoginResponse } from '../models/login';
import { HttpService } from './http.service';
import { GenericResponse } from '../models/generic-response';
import { Headers } from '@angular/http';
import { StorageService } from './storage.service';
@Injectable({
    providedIn: "root"
})
export class AccountService {
    constructor(private config: Config, private http: HttpService, private storage: StorageService) { }

    Login(model: Login): Promise<GenericResponse<LoginResponse>> {
        var token = this.storage.getRememberMeToken();
        var headers = new Headers();
        if (!token) return this.http.post(this.config.AuthApi + "Account/Login", model);
        headers.append('x-rememberme', token);
        return this.http.post(this.config.AuthApi + "Account/Login", model, headers);
    }

    Login2fa(code: string, token: string): Promise<GenericResponse<LoginResponse>> {
        var headers = new Headers();
        headers.append('authorization', 'bearer ' + token);
        return this.http.post(this.config.AuthApi + "Account/Login2fa", {
            code: code
        }, headers);
    }

    RenewToken(): Promise<GenericResponse<LoginResponse>> {
        return this.http.post(this.config.AuthApi + "Account/RenewToken", {});
    }
}