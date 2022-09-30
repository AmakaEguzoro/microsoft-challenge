import { Component, OnInit } from '@angular/core';
import borrowersData from '../../assets/borrower.json';

interface Borrower {
  borrowers_ID: String;
  staff_ID: String;
  member_ID: String;
  borrowers_dateborrowed: String;
  borrowers_duereturndate: String;
}

@Component({
  selector: 'app-borrowers',
  templateUrl: './borrowers.component.html',
  styleUrls: ['./borrowers.component.css'],
})
export class BorrowersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  borrowers: Borrower[] = borrowersData;

  searchText = '';
}
