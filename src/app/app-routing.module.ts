import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent, children: [
    {path: '', component: UserSelectComponent},
    {path: ':id', component: UserDetailComponent},
    {path: ':id/edit', component: UserEditComponent}
  ]},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
