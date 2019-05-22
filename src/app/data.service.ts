import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CharacterModels } from './character-model';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
     providedIn: 'root'
})
export class DataService {
     private key = 'cab7bf9824b729c6d118dca91bea143c';
     private secret = 'a7b2fbfe6a71c3cfeb894cb1989a50fbe86c8c63';
     private ts = 22;

     constructor(private http: HttpClient) {
     }

     public getJSON(): Observable<CharacterModels> {

          // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
          // https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=cab7bf9824b729c6d118dca91bea143c

          // https://gateway.marvel.com:443/v1/public/characters?name=hulk&ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
          // ?name=hulk&ts=1&apikey=&apiKey&hash=&hash

          this.ts = this.ts + 1;
          const hashCode = this.getMD5Code();
          const url = 'https://gateway.marvel.com:443/v1/public/characters';
          let params = new HttpParams();

/*
Params: {
  "apikey": "your api key",
  "ts": "a timestamp",
  "hash": "your hash"
*/


          // https://gateway.marvel.com:443/v1/public/characters?apikey="cab7bf9824b729c6d118dca91bea143c"&hash="1511a960d65610c456421d22ec9a0ba7"&ts="1"&name="Hulk"

          // Begin assigning parameters
          params = params.append('apikey', this.key.toString());
          params = params.append('ts', this.ts.toString());
          params = params.append('hash', hashCode);
          params = params.append('name', 'Hulk');
          params = params.append('limit', '25');

          return this.http.get<CharacterModels>(url, { params: params });
     }


     public getMD5Code(): string {
          return this.generateMD5Code(this.ts, this.key, this.secret);
     }

     public generateMD5Code(ts: number, key: string, secret: string): string {
          return Md5.hashAsciiStr(`${ts}${key}${secret}`).toString();
     }

     public  generateMD5String(input: string) {
          return Md5.hashStr(input);
     }
}
