import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IPost } from './../post/ipost';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<any> {
  post: IPost;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPost> {
    return this.postService.getPosts(); // last one and true

    // const id = route.params['id'];
    // if (isNaN(id)) {
    //   console.log(`Product id was not a number: ${id}`);
    //   this.router.navigate(['/postList']);
    // }

    // this.postService.getPost(+id).subscribe({
    //   next(response) {
    //     console.log(response),
    //     this.post = response;
    //   },
    //   error(err) {
    //     console.error('Error: ' + err);
    //   },
    //   complete() {
    //     console.log('Completed');
    //   }
    // });
  }
  initialPost() {
    return this.post = { id: 1, productName: '', productCode: '' };
  }

  constructor(private postService: PostService, private router: Router) {}
}
