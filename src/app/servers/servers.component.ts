import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import * as moment from 'moment';

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
  showCurrentTime = false;
  currentTime = moment();

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  counter = 0;

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
    this.showCurrentTime = true;
    this.counter++;
  }
}
export class MomentDemo {
  secretPassword = 'tuna';

  test() {
    const date = moment();
    let time = new Date('DD.MM.YYYY HH:mm:ss');
    return `${date} ${time}`;
  }

  localeTest() {
    console.log(moment.locale());
    moment.locale('en');
  }
}
