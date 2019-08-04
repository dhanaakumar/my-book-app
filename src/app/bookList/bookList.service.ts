import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()

export class BookListService {
    
    constructor( private http: HttpClient ) {}
    
    getBooks(q:string): Observable<any[]> {
        const query = `https://www.googleapis.com/books/v1/volumes?q=${q}`;
        return this.http.get<any[]>(query);
    }
}
