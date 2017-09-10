import { Component,OnInit } from "@angular/core";
// import { Router } from '@angular/router';

import { UsersService } from './users.service';
import { User } from "./User";

@Component({
    templateUrl:'app/users/users.component.html'
})
export class UsersComponent implements OnInit{

    users:User[];

    constructor(private _usersService:UsersService){

    }

    ngOnInit(){
        this._usersService.getUsers()
        .then(
            res=>{
                this.users=res;
                // console.log(this.users);
            }
        )
    }
}