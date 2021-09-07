import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiUrlHelperService {

  constructor() { }

  getQueryParameter(url: string, queryParameter: string, splitBy: string): string{
    try{
      let parameterstr = url.split(splitBy)[1];
      let parameterList = parameterstr.split("&");
      for(let p of parameterList){
        if(p.includes(queryParameter+"=")){
          let parameterValue = p.split("=")[1];
          return parameterValue;
        }
      }
    }catch(ex){
      
    }
    return "";
  }
}
