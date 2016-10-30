/**
 * Created by andrewlobban on 10/28/16.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <ul class="nav navbar-nav">
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/history']">History</a></li>
        </ul>`
})
export class AppComponent { }
