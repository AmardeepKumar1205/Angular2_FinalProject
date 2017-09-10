import { Router, RouterModule } from "@angular/router";

import { AddUserComponent } from './addUser.component';
import { UsersComponent } from "./users.component";

export const usersRouting = RouterModule.forChild([
    {path:'users/new',component:AddUserComponent},
    {path:'users',component:UsersComponent},
])