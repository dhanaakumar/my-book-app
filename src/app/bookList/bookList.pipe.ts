import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'filterPipe'
})

export class FilterPipe implements PipeTransform{
    transform(value: any[], userInput: string){
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((book)=> (book.volumeInfo.title).toLowerCase().indexOf(userInput) !== -1) : value;
    }
}