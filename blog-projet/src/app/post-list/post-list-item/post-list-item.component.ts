import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() index:number;
  @Input() post:Post;

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
  }

  onLoveIts(i:number){
  	this.postsService.onLoveIts(i);
  }

  onDontLoveIts(i:number){
  	this.postsService.dontLoveIts(i);
  }

  onDeletePost(post:Post){
  	this.postsService.removePost(post);
  }

  getColor(i:number){
  	this.postsService.getColor(i);
  }
}
