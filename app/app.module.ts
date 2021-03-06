import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProductComponent,EditDialog } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AddDevice } from "./adddevice/adddevice.component";
import { ImportExcel } from "./importexcel/importexcel.component";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as moment from 'moment';

export const firebaseConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAz_fYMCzETWKow3ibls6bkwq7dhQ_F_Ao",
    authDomain: "storage-55982.firebaseapp.com",
    databaseURL: "https://storage-55982.firebaseio.com",
    projectId: "storage-55982",
    storageBucket: "storage-55982.appspot.com",
    messagingSenderId: "1083390387627"
  }
};

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   AngularFireModule.initializeApp(firebaseConfig.firebase),
                   AngularFirestoreModule, 
                   AngularFireAuthModule,
                   AngularFireDatabaseModule,
                   HttpModule,
                   MatDialogModule,
                   BrowserAnimationsModule,
                   HttpClientModule,
                   MatNativeDateModule,
                   ReactiveFormsModule,
                   MatButtonModule,
                   MatDatepickerModule,
                   MatInputModule,
                   
                   ],
  declarations: [ AppComponent,
                          ProductComponent,
                          LoginComponent,
                          RegisterComponent,
                          AddDevice,
                          ImportExcel,
                          NavbarComponent,
                          EditDialog
                          ],
  providers: [ AddDevice,MatDialogModule,],
  bootstrap: [AppComponent],
  entryComponents: [ProductComponent, EditDialog],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]

})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);