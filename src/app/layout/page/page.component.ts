import { Component, OnInit } from '@angular/core';
import { TransitionService, StateService, Transition } from '@uirouter/core';
import { StorageService } from '../../../services/storage.service';
import { ToastService } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private transitionService: TransitionService, private storage: StorageService, private state: StateService, private transition: Transition, private toastrService: ToastService) {
    transitionService.onBefore({ to: 'app.*' }, (t) => {
      this.validate();
    });
    this.validate();
  }

  ngOnInit() {

  }

  validate() {
    setTimeout(() => {
      var token = this.storage.getAuthToken();
      if (token == null) {
        this.transition.abort();
        this.toastrService.error("User not authorized. Please login again.")
        this.state.go('login');
        return;
      }
    }, 0);
  }
}
