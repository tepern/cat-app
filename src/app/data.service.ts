import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { HttpService } from './http.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class DataService {

    private subject = new BehaviorSubject(this.httpService.getData());

    constructor(private httpService: HttpService) { 
      
    }

    getData(): Observable<any> {
        //return this.catData;
        //return this.httpService.getData();
        return this.subject;
    }

    public addData(newCat: Cat){
          
        //this.catData.unshift(newCat);
    }
}