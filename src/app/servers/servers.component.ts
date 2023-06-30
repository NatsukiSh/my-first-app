import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';

@Component({
  // selector: '[app-servers]',
  //selector: `.app-servers`,
  selector: `app-servers`,
  //template: ` <app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = '';
  allowUserNameReset = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  secretPassword = 'tuna';
  showPassword = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  enableResetUserName() {
    if (this.userName != null) {
      this.allowUserNameReset = true;
    }
  }
  resetFrom() {
    this.userName = '';
    this.allowUserNameReset = false;
  }
  clickedButton() {
    this.showPassword = true;
  }
}
