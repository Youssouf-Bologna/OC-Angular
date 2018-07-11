import { Component, OnInit }                   from '@angular/core'            ;
import { FormBuilder, FormGroup, Validators }  from '@angular/forms'           ;
import { Router }                              from '@angular/router'          ;
import { Subscription }                        from 'rxjs/Subscription'        ;
import { PostsService }                        from '../services/posts.service';
import { Post }                                from '../models/post'           ;


@Component({
    selector:       'app-new-post-component',
    templateUrl:    './new-post.component.html',
    styleUrls:     ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;

    constructor(
        private formBuilder:    FormBuilder,
        private postsService:   PostsService,
        private router:         Router
    ){ }

    ngOnInit() {
        //initialisation du formulaire
        this.initForm();
    }
  
    initForm() {
        //confection du formulaire
        this.postForm = this.formBuilder.group({
            title:    ['', Validators.required],
            content:  ['', Validators.required]
        });
    }

    onPost() {
        //recuperation des entrées du formulaire
        const title   = this.postForm.get('title'  ).value;
        const content = this.postForm.get('content').value;
        //Instantiation d'un Post
        const newPost = new Post(title, content);
        console.log(newPost);
        //post du post
        this.postsService.post(newPost);
        //retour à la list des posts
        this.router.navigate(['/posts']);
    }
}
