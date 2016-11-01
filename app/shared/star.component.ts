import {Component, OnChanges, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'pi-star'
    , templateUrl: 'app/shared/star.component.html'
    , styleUrls: ['app/shared/star.component.css']
    // note that if the property name is plural urls
    // , we neede to enclose within Array - implied right..
    , directives: [StarComponent]
})
//StarComponent is the nested component
export class StarComponent implements OnChanges {
    //rating: number = 4;
    @Input() rating: number; //rating is the input taken by the this star component
    starWidth: number;
    //ratingClicked is an event exposed by the nested star component
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(` event ${this.rating} was clicked`);
    }

}