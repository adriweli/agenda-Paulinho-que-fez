
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({mode:'ios'}), AppRoutingModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen, 
    
    { provide:  RouteReuseStrategy, useClass: IonicRouteStrategy,  },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],

  

  bootstrap: [AppComponent]
})


export class AppModule {}
