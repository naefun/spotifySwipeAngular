import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiHttpCallsService {
  trackUrl: string = "https://api.spotify.com/v1/tracks/";

  constructor(private httpClient: HttpClient) { }

  getSong(token: string, trackId: string){
    return this.httpClient.get(this.trackUrl+trackId, {
      headers: {
        Authorization: "Bearer "+token
      }
    });
  }

  playSong(token: string, playerUrl: string){
    return this.httpClient.put("https://api.spotify.com/v1/me/player/play", {
      context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"
    }, {
      headers:{
        Authorization: "Bearer "+token
      }
    });
  }

  pauseSong(token: string){
    return this.httpClient.put("https://api.spotify.com/v1/me/player/pause", {}, {
      headers:{
        Authorization: "Bearer "+token
      }
    });
  }

  getUserProfile(token: string){
    return this.httpClient.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer "+token
      }
    });
  }

  getPlayers(token: string){
    return this.httpClient.get("https://api.spotify.com/v1/me/player/devices", {
      headers: {
        Authorization: "Bearer "+token
      }
    });
  }
}
