import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable()
export class RepositoryBaseService {

    url: string = "http://localhost:1000/debt";

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(map(res => res.json()));
    }

    getById(id) {
        return this.http.get(this.getUrlWithId(id))
            .pipe(map(res => res.json()));
    }

    add(recurso) {
        let body = JSON.stringify(recurso);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options)
            .pipe(map(res => res.json()));
    }

    update(recurso) {
        let body = JSON.stringify(recurso);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.getUrlWithId(recurso.id), body, options)
            .pipe(map(res => res.json()));
    }

    del(id) {
        return this.http.delete(this.getUrlWithId(id))
            .pipe(map(res => res.json()));
    }

    private getUrlWithId(id) {
        return this.url + "/" + id;
    }
}