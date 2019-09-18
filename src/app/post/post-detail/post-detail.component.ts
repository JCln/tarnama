import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from './../../_services/post.service';
import { IPost } from './../ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  post: IPost;
  errorMessage: string;

  constructor(private route: ActivatedRoute , private postService: PostService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.route.snapshot.data['post'];
    this.getPost(id);
  }
  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      post => this.post = post,
      error => this.errorMessage = <any>error);
  }

}
