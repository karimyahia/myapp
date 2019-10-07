import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SingupComponent,
    NotFoundComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD_R--vjZVOUXbl5yFoT4_b0f2afFvep68",
      authDomain: "myapp-e6153.firebaseapp.com",
      databaseURL: "https://myapp-e6153.firebaseio.com",
      projectId: "myapp-e6153",
      storageBucket: "myapp-e6153.appspot.com",
      messagingSenderId: "356668152443",
      appId: "1:356668152443:web:622a4a1557cb50f73c60de",
      measurementId: "G-MK3W95MDP7"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
