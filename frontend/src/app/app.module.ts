import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import bootstrap from "bootstrap";


//jwt-authentication
import { AppComponent } from './app.component';

// Wordpress api
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';

import { RouterModule, Routes } from '@angular/router';
import { AreariservataComponent } from './areariservata/areariservata.component';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';
import { AreariservataService } from './areariservata/areariservata.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';



export function WpApiLoaderFactory(http: Http) {
   return new WpApiStaticLoader(http, 'http://localhost/wp-json/' /* namespace is optional, default: '/wp/v2' */);
}


@NgModule({
  declarations: [
    AppComponent,  
    AreariservataComponent
  ],
  imports: 
  [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: WpApiLoaderFactory,
      deps: [Http]
    }),
  ],
  providers: 
  [
    HttpErrorHandler,
    AreariservataService,
    MessageService,
    {
      provide: APP_BASE_HREF, useValue: ''
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    
  ]
})
export class AppModule {}
