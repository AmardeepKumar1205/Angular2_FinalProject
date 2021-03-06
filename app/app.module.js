"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const navbar_component_1 = require("./navbar.component");
const home_component_1 = require("./home.component");
const not_found_component_1 = require("./not-found.component");
const users_routing_1 = require("./users/users.routing");
const posts_routing_1 = require("./posts/posts.routing");
const app_routing_1 = require("./app.routing");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            posts_routing_1.postsRouting,
            users_routing_1.usersRouting,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            not_found_component_1.NotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map