import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  name: string,
  id: number,
  description: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {name: "James", id: 1, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
    {name: "Jerry", id: 2, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
    {name: "jose", id: 3, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
    {name: "Jesus", id: 4, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
    {name: "Jaime", id: 5, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
    {name: "Jennifer", id: 6, description: "I am a programmer", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"},
  ];

 usersUpdated = new Subject<User[]>();

  constructor(private router: Router) { }

  get _users(){
    return this.users.slice();
  }

  editUser(user) {
    let index = this.users.findIndex(x => x.id === user.id);
    this.users[index].name = user.name;
    this.users[index].description = user.description;
    this.usersUpdated.next(this.users);
    this.router.navigateByUrl('users');
  }
}
