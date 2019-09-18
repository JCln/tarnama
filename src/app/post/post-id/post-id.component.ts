import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from './../../_services/post.service';
import { IPost } from './../ipost';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.scss']
})
export class PostIdComponent implements OnInit {
  pageTitle = 'Posts List';
  posts: IPost[];
  errorMessage: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.posts = this.route.snapshot.data['id'];
    // this.route.data.subscribe(data => console.log('data: ', data));

    // this.postService
    //   .getPosts()
    //   .subscribe(
    //     posts => (this.posts = posts),
    //     error => (this.errorMessage = <any>error)
    //   );
  }
}
