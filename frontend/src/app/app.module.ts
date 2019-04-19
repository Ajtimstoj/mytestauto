import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import bootstrap from 'bootstrap';


// jwt-authentication
import { AppComponent } from './app.component';

// Wordpress api
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';

import { AreariservataComponent } from './areariservata/areariservata.component';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';
import { AreariservataService } from './areariservata/areariservata.service';
import { HttpErrorHandler } from './http-error-handler.service';



// tslint:disable-next-line: deprecation
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
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: WpApiLoaderFactory,
      // tslint:disable-next-line: deprecation
      deps: [Http]
    }),
  ],
  providers:
  [
    HttpErrorHandler,
    AreariservataService,
    {
      provide: APP_BASE_HREF, useValue: ''
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule {}
