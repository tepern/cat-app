import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Cat } from '../cat';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<Cat[]>('/assets/cats.json')
    } 
}