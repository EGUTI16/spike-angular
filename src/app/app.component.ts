import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spike-angular';

  usersList: Array<any> = [];
  currentUser = {};

  public userList(a: any) {
    this.usersList = a;
  }
}
