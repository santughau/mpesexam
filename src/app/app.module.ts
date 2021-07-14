import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatListModule, } from '@angular/material/list';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule, } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { DownloadComponent } from './download/download.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdvertiseDetailsComponent } from './advertise-details/advertise-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuizComponent,
    AdvertiseComponent,
    DownloadComponent,
    QuestionsComponent,
    AdvertiseDetailsComponent
  ],
  imports: [
    BrowserModule, NgxPaginationModule,
    AppRoutingModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule, MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4151366218309776',
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
