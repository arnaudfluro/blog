import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
	post1=new Post("testApp","cette application est vraiment dingue");
	posts:Post[]=[this.post1];
	postsSubject=new Subject<Post[]>();
  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post:Post)
  {
  	const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  onLoveIts(i:number){
  	this.posts[i].loveIts=+1;
  }

  dontLoveIts(i:number){
  	this.posts[i].loveIts=-1;
  }

  getColor(i:number){
  	if(this.posts[i].loveIts >0 ) {
      return 'green';
    } else if(this.posts[i].loveIts <0) {
      return 'red';
    }
  }
}
