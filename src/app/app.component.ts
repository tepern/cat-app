import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Cat } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'cat-app';
  cats: Cat[]=[{"_id": "6","name": "puh", "like": 1, "img": "", "description": "test"}];

  constructor(public dataService: DataService) { 
      
  }

    ngOnInit() {
       //this.cats = this.httpService.getData().subscribe(data => { this.cats=data;});
       //this.dataService.catData = this.cats;
       //console.log(this.dataService.catData);
    }
}
