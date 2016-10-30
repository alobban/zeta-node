/**
 * Created by andrewlobban on 10/28/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot([
        // { path: 'history', component: HistoryComponent },
        // { path: 'welcome', component: WelcomeComponent },
        { path: '', component: AppComponent },
        { path: '**', component: AppComponent }
    ]) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
