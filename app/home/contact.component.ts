import {Component} from 'angular2/core';
//import {AppComponent} from '../app.component';
import {Router} from 'angular2/router';
@Component({
    // template: `
    //     <div align='center'>
    //         <span> Email : rbangaru@prokarma.com <span/>
    //         <span> Phone : 402-913-2948 <span/>
    //     </div>
    // `
    templateUrl: 'app/home/contact.component.html'
})
//export class ContactComponent extends AppComponent{
export class ContactComponent {
    constructor(private _router: Router) {
    }
    homeButtonLabel: string = 'Home';
    hColor: string = 'purple';
    goHome(): void {
        console.log('within goHome() of app.component.js');
        this._router.navigate(['WelcomeComponent']);
    }
}