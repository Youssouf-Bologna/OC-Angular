import { Component, OnInit, OnDestroy } from '@angular/core'            ;
import { Router }                       from '@angular/router'          ;
import { Subscription }                 from 'rxjs/Subscription'        ;
import { PostsService }                 from '../services/posts.service';
import { Post }                         from '../models/post'           ;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

    posts:                Post[]      ;
    postsSubscription:     Subscription;

    constructor(
        private postsService:   PostsService,
        private router:         Router      
    ) { }

    ngOnInit() {
        this.postsSubscription = this.postsService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postsService.getPosts();
        this.postsService.emitPosts();
    }
    
    ngDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
