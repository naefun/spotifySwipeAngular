import { Component, OnInit } from '@angular/core';
import { SpotifyApiAuthorizationService } from '../spotify-api-authorization.service';
import { SpotifyApiUrlHelperService } from '../spotify-api-url-helper.service';
import { SpotifyApiHttpCallsService } from '../spotify-api-http-calls.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-spotify-api',
  templateUrl: './spotify-api.component.html',
  styleUrls: ['./spotify-api.component.css']
})
export class SpotifyApiComponent implements OnInit {

  songJson:any;
  trackCoverImageUrl:string;
  songName:string;
  isPremiumAccount: boolean;

  constructor(
    private spotifyService: SpotifyApiAuthorizationService, 
    private urlHelper: SpotifyApiUrlHelperService,
    private spotifyCalls: SpotifyApiHttpCallsService) {
      this.trackCoverImageUrl = "";
      this.songName =  "";
      this.isPremiumAccount = false;
    }

  ngOnInit(): void {
    this.setTokenCookieIfPresent();
  }

  authorize(){
    this.spotifyService.requestAuthorization();
  }

  urlHasToken(): boolean{
    let token: string = this.retrieveTokenFromUrl();
    if(token.length > 0){
      return true;
    }
    return false;
  }

  retrieveTokenFromUrl(): string{
    return this.urlHelper.getQueryParameter(window.location.href, "access_token", "#");
  }

  setTokenCookieIfPresent(){
    if(this.urlHasToken()){
      this.spotifyService.setAuthorizationTokenCookie(this.retrieveTokenFromUrl());
    }
  }

  logTokenCookieValue(){
    console.log(this.spotifyService.getAuthorizationTokenCookie());
  }

  getSong(trackId: string): any{
    return this.spotifyCalls.getSong(this.spotifyService.getAuthorizationTokenCookie(), trackId).subscribe(
      data => {
        console.log(data);
        this.songJson = data;
        this.setSongDetails(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  // TODO: currently only gets a predefined song, make it get a random song
  getRandomSong(){
    try{
      this.getSong("3n3Ppam7vgaVa1iaRUc9Lp");
    }catch(ex){
      console.error(ex);
    }
  }

  playSong(){
    this.spotifyCalls.playSong(this.spotifyService.getAuthorizationTokenCookie(), "").subscribe();
  }

  pauseSong(){
    this.spotifyCalls.pauseSong(this.spotifyService.getAuthorizationTokenCookie()).subscribe();
  }

  setCoverImage(imageUrl:string){
    this.trackCoverImageUrl = imageUrl;
  }
  setSongName(name:string){
    this.songName = name;
  }

  setSongDetails(songJson: any){
    this.setCoverImage(songJson.album.images[0].url);
    this.setSongName(songJson.name);
    console.log("set them");
  }

  getUserDetails(){
    this.spotifyCalls.getUserProfile(this.spotifyService.getAuthorizationTokenCookie()).subscribe(
      data => {
        this.isUserPremium(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  isUserPremium(details: any): boolean{
    if(details.product == "premium"){
      return true;
    }
    return false;
  }

  getDeviceIds(){
    this.spotifyCalls.getPlayers(this.spotifyService.getAuthorizationTokenCookie()).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }
}
