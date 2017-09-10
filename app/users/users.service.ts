import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
// import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/forkJoin';

import { User } from "./User";

@Injectable()
export class UsersService{

    private _baseUrl="https://jsonplaceholder.typicode.com/";

    constructor(private _http:Http){

    }

    getUsers():Promise<User[]>{
        let users=this._http.get(this._baseUrl+"users");

        return users
                .map(res=>res.json())
                .toPromise();
    }
}