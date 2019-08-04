import { Component, OnInit } from '@angular/core';
import { BookListService } from './bookList.service';


@Component({
    selector: 'app-booklist',
    templateUrl: './bookList.component.html',
    styleUrls: ['./bookList.component.css']
})

export class BookListComponent implements OnInit {
    heading: string = 'List Of Books';
    imageWidth: number = 100;
    imageHeight: number = 100;
    show: boolean = true;
    userInput: string;
    searchInput: string = 'javascript';
    message: string;
    bookLists: any[];

    constructor(private bookListService: BookListService) { }

    ngOnInit() {
        this.searchBooks();
    }
    showHideMethod() {
        this.show = !this.show;
    }

    searchBooks() {
        this.bookListService.getBooks(this.searchInput)
            .subscribe((data) => this.bookLists = data.items);


    }

    messageRecived(message) {
        this.message = message;
    }
}