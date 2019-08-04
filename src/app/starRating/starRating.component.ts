import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './starRating.component.html',
    styleUrls: ['./starRating.component.css']
})

export class StarRatingComponent implements OnChanges {
    @Input () rating: number;
    @Output () passRatingValue: EventEmitter<string> = new EventEmitter<string>();
     starWidth: number;


    ngOnChanges(): void {
        this.starWidth = 72 / 5 * this.rating;
        this.starWidth = this.starWidth ? this.starWidth : 0;
    }

    displayRating() {
        this.passRatingValue.emit(`The Rating clicked was ${this.rating}`)
    }
}
