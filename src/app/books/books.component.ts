import { Component, OnInit } from '@angular/core';
import booksData from '../../assets/book.json';

interface Book {
  book_ID: Number;
  book_title: String;
  book_edition: String;
  book_author: String;
  book_publisher: String;
  book_copies: Number;
  book_costs: Number;
  book_remarks: String;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  books: Book[] = booksData;

  searchText = '';
}
