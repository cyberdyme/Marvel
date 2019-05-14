import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterModels } from './character-model';

@Injectable({
     providedIn: 'root'
})
export class DataService {
     constructor(private http: HttpClient) {
     }

     public getJSON(): Observable<CharacterModels> {
          return this.http.get<CharacterModels>('assets/character.json');
     }
}
