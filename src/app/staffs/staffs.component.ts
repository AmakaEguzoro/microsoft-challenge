import { Component, OnInit } from '@angular/core';
import staffsData from '../../assets/staffs.json';

interface Staff {
  staff_ID: Number;
  staff_firstname: String;
  staff_lastname: String;
  staff_mobile: String;
  staff_email: String;
  staff_password: String;
  staff_authsalt: String;
  staff_category: String;
}

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css'],
})
export class StaffsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  staffs: Staff[] = staffsData;

  searchText = '';
}
