import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiAuthorizationService {
  clientId: string = "90e8882c8d72487a88573f1997e1db1e";
  responseType: string = "token";
  redirectUri: string = "http://localhost:4200";
  scope: string = "user-follow-modify%20user-modify-playback-state%20streaming%20user-read-email%20user-read-private%20user-read-playback-state";
  authorizationUrl: string = "https://accounts.spotify.com/authorize";

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }
  
  requestAuthorization(){
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&response_type=${this.responseType}`
  }

  setAuthorizationTokenCookie(cookieValue: string){
    this.cookieService.set("token", cookieValue);
  }
  getAuthorizationTokenCookie(): string{
    return this.cookieService.get("token");
  }

}
