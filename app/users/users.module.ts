import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }        from '@angular/router';


import { UsersComponent } from './users.component';
import { AddUserComponent } from './addUser.component';

import { UsersService } from './users.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UsersComponent,
        AddUserComponent
    ],
    exports: [
        UsersComponent,
        AddUserComponent
    ],
    providers:[UsersService]
})
export class UsersModule {
    
}