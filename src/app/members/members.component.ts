import { Component, OnInit } from '@angular/core';
import membersData from '../../assets/members.json';

interface Member {
  member_ID: Number;
  member_firstname: String;
  member_lastname: String;
  member_dateofbirth: String;
  member_gender: String;
  member_mobile: String;
  member_email: String;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  members: Member[] = membersData;

  searchText = '';
}
