import { Component, Input , OnInit, OnDestroy } from '@angular/core'           ;
import { Subscription }                         from 'rxjs/Subscription'       ;
import { PostsService }                         from '../services/posts.service';
import { Post }                                 from '../models/post'          ;

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;
    posts: Post[];
    postsSubscription: Subscription;
    
    constructor(
        private postsService:    PostsService
    ) { }

    ngOnInit() {
        this.postsSubscription = this.postsService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postsService.emitPosts()
    }
    
    onDelete(post: Post) {
        this.postsService.deletePost(post);
    }
    
    onLove(post: Post) {
        post.loveIts++;
        this.postsService.updatePosts();
    }
    
    onNoLove(post: Post ) {
        post.loveIts--;
        this.postsService.updatePosts();
    }
    
    ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
