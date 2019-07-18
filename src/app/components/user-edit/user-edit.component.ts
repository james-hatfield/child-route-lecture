import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup;
  user;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService._users[params.id - 1];
      this.editUserForm = this.fb.group({
        name: this.user.name,
        description: this.user.description
      });
    });
   
  }
  
  onSubmit() {
     let editedUser ={
       name: this.editUserForm.controls.name.value,
       description: this.editUserForm.controls.description.value,
       id: this.user.id,
       img: this.user.img
     }
     this.userService.editUser(editedUser);
  }

}
