import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { PostsComponent } from './posts.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PostsComponent
    ],
    exports: [
        PostsComponent
    ]
})
export class PostsModule {
}