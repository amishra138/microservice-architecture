import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { ProfileService } from '../../../services/profile.service';
import { StateService } from '@uirouter/core';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html'
})

export class LandingPageComponent implements OnInit {
    constructor(private storage: StorageService, private profileService: ProfileService, private state: StateService) { }

    ngOnInit() {
        var rememberMe = this.storage.getRememberMe();
        var token = this.storage.getAuthToken();
        if (!rememberMe && !token) this.state.go('login');
        if (!token) this.state.go('login');
        this.profileService.GetUserProfile()
            .then((user) => {
                this.storage.setUser(user.Data);
                this.state.go('app.dashboard');
            }, () => {
                this.state.go('login');
            });
    }
}