import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CatListComponent} from './cat-list/cat-list.component';
import {CatFormComponent} from './cat-form/cat-form.component';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { DataService } from './data.service';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
