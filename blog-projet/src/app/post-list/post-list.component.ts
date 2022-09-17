import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
 	posts:Post[];
	postSubscription:Subscription;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
  	this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
