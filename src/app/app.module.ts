import { BrowserModule }                    from '@angular/platform-browser'   ;
import { NgModule }                         from '@angular/core'               ;

import { Routes }                           from '@angular/router'             ;
import { RouterModule }                     from '@angular/router'             ;

import { FormsModule, ReactiveFormsModule } from '@angular/forms'              ;

import { AppComponent }                     from './app.component'             ;
import { PostsService }                     from './services/posts.service'    ;
import { PostListComponent }        from './post-list/post-list.component'     ;
import { PostListItemComponent }    from './post-list-item/post-list-item.component';
import { NewPostComponent }         from './new-post/new-post.component'       ;

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new' , component: NewPostComponent },
  { path: '' ,  redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
