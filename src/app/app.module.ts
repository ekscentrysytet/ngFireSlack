import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBoL2b9S5NUGYzhLJYwOn7CTSohq9Zj-8M',
  authDomain: 'ngfireslack-b614a.firebaseapp.com',
  databaseURL: 'https://ngfireslack-b614a.firebaseio.com',
  projectId: 'ngfireslack-b614a',
  storageBucket: 'ngfireslack-b614a.appspot.com',
  messagingSenderId: '656122539815'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
