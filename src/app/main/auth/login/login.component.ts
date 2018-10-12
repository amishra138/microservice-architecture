import { Component, OnInit } from '@angular/core';
import { Login } from '../../../../models/login';
import { AccountService } from '../../../../services/account.service';
import { StateService } from '@uirouter/core';
import { StorageService } from '../../../../services/storage.service';
import { ProfileService } from '../../../../services/profile.service';
import { Broadcaster } from '../../../../services/broadcast-event';
import { Events } from '../../../../models/broadcast-event';
import { GenericResponse } from '../../../../models/generic-response';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private accountService: AccountService, private state: StateService, private storage: StorageService, private profileService: ProfileService, private broadcaster: Broadcaster, private toastr: ToastService) {

    }
    model: Login = {
        email: "goals@yopmail.com",
        password: "Abcdfg@88"
    };
    rememberMe: boolean = false;
    loggedIn: boolean = false;
    ngOnInit() {

    }
    doLogin() {
        this.storage.clear();
        this.accountService.Login(this.model)
            .then((token) => {
                if (token.successful && token.statusCode == 2001 && token.message.startsWith('Token Generated, but two factor authentication is requred.')) {
                    this.state.go('login2fa', { token: token.Data.token, rememberMe: this.rememberMe });
                }
                else {
                    this.storage.setAuthToken(token.Data, this.rememberMe);
                    this.profileService.GetUserProfile()
                        .then((user) => {
                            this.loggedIn = true;
                            this.broadcaster.broadcast(Events.LOGGED_IN);
                            this.storage.setUser(user.Data);
                            setTimeout(() => {
                                this.state.go('app.dashboard');
                            }, 500);
                        });
                }
            }, (error: GenericResponse<any>) => {
                this.toastr.error(error.message);
            });
    }
}