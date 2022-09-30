import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BorrowersComponent } from './borrowers/borrowers.component';
import { MembersComponent } from './members/members.component';
import { StaffsComponent } from './staffs/staffs.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'staffs',
    component: StaffsComponent,
  },
  {
    path: 'borrowers',
    component: BorrowersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  BooksComponent,
  MembersComponent,
  StaffsComponent,
  BorrowersComponent,
];
