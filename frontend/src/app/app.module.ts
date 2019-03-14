import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//jwt-authentication
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

// Wordpress api
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';

import { RouterModule, Routes } from '@angular/router';
import { AreariservataComponent } from './areariservata/areariservata.component';
import { APP_BASE_HREF } from '@angular/common';
import { Http } from '@angular/http';



export function WpApiLoaderFactory(http: Http) {
   return new WpApiStaticLoader(http, 'http://localhost/wp-json/' /* namespace is optional, default: '/wp/v2' */);
}


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    UserComponent, 
    RegisterComponent, 
    HomeComponent, 
    AdminComponent,
    PmComponent, 
    AreariservataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: WpApiLoaderFactory,
      deps: [Http]
    }),
    
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: ''
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
