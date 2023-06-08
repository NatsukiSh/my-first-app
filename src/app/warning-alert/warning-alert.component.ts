import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [
    `
      p {
        color: #aa0757;
        background: #374148;
        border-radius: 8px;
        text-align: center;
      }
    `,
  ],
})
export class WarningAlertComponent {}
