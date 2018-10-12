import { Injectable } from '@angular/core';
import { GenericResponse } from '../models/generic-response';
import { User } from '../models/user';
import { HttpService } from './http.service';
import { Config } from '../app/config';

@Injectable({
    providedIn: "root"
})
export class ProfileService {

    constructor(private http: HttpService, private config: Config) { }

    GetUserProfile(): Promise<GenericResponse<User>> {
        return this.http.get(this.config.AuthApi + "profile/GetUserProfile");
    }
}