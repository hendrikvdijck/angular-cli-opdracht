import { InMemoryDbService } from 'angular-in-memory-web-api';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// autocomplete forms
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class KunstenaarsService implements InMemoryDbService {

  createDb() {
    let Kunstenaars = this.getAllKunstenaars();
    return { Kunstenaars };
}

  constructor(private http: Http) { }
 
  getAllKunstenaars() {
    return this.http.get(environment.kunstenaarDataSource).map((response: Response) => response.json())
        .map(this.handleRequest)
        .catch(this.handleError);
  }

  private handleRequest(res: Response) {
    let body = res.json();
    return body || {};
}

private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}