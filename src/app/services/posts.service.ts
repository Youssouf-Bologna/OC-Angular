import { Injectable }   from '@angular/core'    ;
import { Subject }      from 'rxjs/Subject'     ;
import { Post }         from '../models/post'   ;
import * as firebase    from 'firebase'         ;
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  
  private   posts: Post[] = [];
  public    postsSubject = new Subject<Post[]>();

  emitPosts() {
    console.log(this.posts);
    this.postsSubject.next(this.posts);
  }
  
  post(post: Post) {
      this.posts.push(post);
      this.savePosts();
      this.emitPosts();
  }
  
  updatePosts() {
      this.savePosts();
      this.emitPosts();
  }
  
  deletePost(post: Post) {
      this.posts.splice(this.posts.indexOf(post),1);
      this.savePosts();
      this.emitPosts();
  }
  
  savePosts() {
      firebase.database().ref('/posts').set(this.posts);
  }
  
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }
  
  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
}
