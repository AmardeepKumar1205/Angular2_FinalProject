"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const addUser_component_1 = require("./addUser.component");
const users_component_1 = require("./users.component");
exports.usersRouting = router_1.RouterModule.forChild([
    { path: 'users/new', component: addUser_component_1.AddUserComponent },
    { path: 'users', component: users_component_1.UsersComponent },
]);
//# sourceMappingURL=users.routing.js.map