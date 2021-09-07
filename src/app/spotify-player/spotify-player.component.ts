import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { SpotifyApiAuthorizationService } from '../spotify-api-authorization.service';

@Component({
  selector: 'app-spotify-player',
  templateUrl: './spotify-player.component.html',
  styleUrls: ['./spotify-player.component.css']
})
export class SpotifyPlayerComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
    private spotifyService: SpotifyApiAuthorizationService
) { }

public ngOnInit() {

    let script = this._renderer2.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.text = `
        {
            "@context": "https://schema.org"

        }
    `;

    this._renderer2.appendChild(this._document.body, script);

    this.createPlayer();
}

public createPlayer(){
    let scriptPlayer = this._renderer2.createElement('script');
    scriptPlayer.text = `
        
     window.onSpotifyWebPlaybackSDKReady = () => {
      const token = "`+this.spotifyService.getAuthorizationTokenCookie()+`";
      const player = new Spotify.Player({
          name: 'SpotifySwipe',
          getOAuthToken: cb => { cb(token); },
          volume: 0.5
      });

      player.connect();
      }
  
  `;
  
    this._renderer2.appendChild(this._document.body, scriptPlayer);
}

}
