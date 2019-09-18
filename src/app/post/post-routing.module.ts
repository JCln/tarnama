import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostResolverService } from './../_services/post-resolver.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostIdComponent } from './post-id/post-id.component';

const routes: Routes = [
  {
    path: 'postList',
    component: PostIdComponent,
    children: [{ path: ':id', component: PostDetailComponent }],
    resolve: { post: PostResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
