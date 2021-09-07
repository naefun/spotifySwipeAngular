import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { SpotifyApiComponent } from './spotify-api/spotify-api.component';
import { SpotifyPlayerComponent } from './spotify-player/spotify-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyApiComponent,
    SpotifyPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
