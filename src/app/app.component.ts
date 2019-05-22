import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CharacterModels } from './character-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel';

  constructor(private dataService: DataService) {
    this.dataService.getJSON().subscribe((x: CharacterModels) => {
      // console.log(x.data.results[0]);
      console.log(x);
    }, err => {
      console.log(err);
    });
  }
}
