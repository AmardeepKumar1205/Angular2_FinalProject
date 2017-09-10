import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";

import { NavbarComponent } from './navbar.component';
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

import { usersRouting } from "./users/users.routing";
import { postsRouting } from "./posts/posts.routing";
import { routing } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    UsersModule,
    PostsModule,
    postsRouting,
    usersRouting,

    routing],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
