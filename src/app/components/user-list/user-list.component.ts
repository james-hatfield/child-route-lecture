import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = []

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService._users;
    this.userService.usersUpdated.subscribe(users => {
      this.users = users;
    });
  }

}
