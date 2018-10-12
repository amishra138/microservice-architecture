import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { AccountService } from '../../../../services/account.service';
import { StorageService } from '../../../../services/storage.service';
import { ProfileService } from '../../../../services/profile.service';
import { Broadcaster } from '../../../../services/broadcast-event';
import { Events } from '../../../../models/broadcast-event';
import { ToastService } from 'ng-uikit-pro-standard';
import { GenericResponse } from '../../../../models/generic-response';

@Component({
    selector: 'login-2fa',
    templateUrl: './login-2fa.component.html',
    styleUrls: ['../login/login.component.css']
})

export class Login2FaComponent implements OnInit {
    constructor(private state: StateService, private accountService: AccountService, private storage: StorageService, private profileService: ProfileService, private broadcaster: Broadcaster, private toastr: ToastService) { }
    code: string;
    loggedIn: boolean = false;
    ngOnInit() { }

    verify2fa() {
        this.accountService.Login2fa(this.code, this.state.params.token)
            .then((response) => {
                this.storage.setAuthToken(response.Data, this.state.params.rememberMe);
                this.profileService.GetUserProfile()
                    .then((userResponse) => {
                        this.loggedIn = true;
                        this.broadcaster.broadcast(Events.LOGGED_IN);
                        this.storage.setUser(userResponse.Data);
                        setTimeout(() => {
                            this.state.go('app.dashboard');
                        }, 500);
                    });
            }, (error: GenericResponse<any>) => {
                this.toastr.error(error.message);
            });
    }
}