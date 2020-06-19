import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import * as DataActions from "../actions/data.action";
import { AppState, getAllItems, getDataState } from "../reducers";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private store: Store<AppState> , private http: HttpClient) { }

  FetchAsia(){

    return this.http.get<any[]>('https://restcountries.eu/rest/v2/region/asia');
}

FetchEurope(){

  return this.http.get<any[]>('https://restcountries.eu/rest/v2/region/europe' );
}
load() {
  this.store.dispatch(new DataActions.LoadDataBegin());
}

getData() {
  return this.store.select(getDataState);
}

getItems() {
  return this.store.select(getAllItems);
}
}
