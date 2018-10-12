import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TransitionService, StateService } from '@uirouter/core';
import { Broadcaster } from '../services/broadcast-event';
import { Events } from '../models/broadcast-event';
import * as moment from "moment";
import { StorageService } from '../services/storage.service';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var token = this.storage.getAuthToken();
    var expiry = moment.unix(parseInt(token.expiryString));
    var currentTime = moment();
    var diff = expiry.diff(currentTime, 'milliseconds')
    if (diff <= 0) return;
    this.renewToken();
  }
  title = 'Travesys';
  /**
   *
   */
  constructor(private pageTitle: Title, private trans: TransitionService, private state: StateService, private broadcaster: Broadcaster, private storage: StorageService, private accountService: AccountService) {
    this.trans.onSuccess({}, (t) => {
      setTimeout(() => {
        if (this.state.current.data && this.state.current.data.title) {
          pageTitle.setTitle(this.title + " | " + this.state.current.data.title);
        } else {
          pageTitle.setTitle(this.title);
        }
      }, 0);
    });
    this.broadcaster.on(Events.LOGGED_IN)
      .subscribe(() => {
        this.renewToken();
      });
  }

  renewToken() {
    var token = this.storage.getAuthToken();
    var expiry = moment.unix(parseInt(token.expiryString));
    var currentTime = moment();
    var diff = expiry.diff(currentTime, 'milliseconds') - (60 * 1000);
    // refresh token before 1 minute of expiry
    setTimeout(() => {
      this.accountService.RenewToken()
        .then(token => {
          this.storage.setAuthToken(token.Data, this.storage.getRememberMe());
          this.broadcaster.broadcast(Events.LOGGED_IN);
        });
    }, diff);
  }
}
