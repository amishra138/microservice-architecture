import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { StateService } from '@uirouter/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storage: StorageService, private state: StateService) { }
  user: User
  ngOnInit() {
    this.user = this.storage.getUser();
  }

  logout() {
    this.storage.clear();
    this.state.go('login');
  }

}
