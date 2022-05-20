import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import 'rxjs/operator/add/map';

@Injectable({
  providedIn: 'root'
})

export class TalkService {

  constructor(private http: HttpClient) {
    // network operation
  }

  getFilteredTalks(): Observable<Array<any>>{
    const params= new URLSearchParams();
    params.set('search',
    JSON.stringify({
      '*': {'operator': 'fuzzy','value': {'query': filter}}
    }));

    return this.http.get(
      'http//data.agenda.wedeploy.io/talks', {params})
      .map((x: { json: () => any; }) => x.json())
      .map((x: { documents: any; }) => x.documents)
      .retry(10);
    )
  }

  getAllTalks(): Observable<Array<any>>{
    return this.http
    .get('http://data.agenda.wedeploy.io/talks')
    .map((x: { json: () => any; }) => x.json())
    .retry(10)
  }
}

