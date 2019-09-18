import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostResolverService } from './../_services/post-resolver.service';
import { PostService } from './../_services/post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostIdComponent } from './post-id/post-id.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostIdComponent, PostDetailComponent],
  imports: [CommonModule, PostRoutingModule],
  providers: [PostService, PostResolverService]
})
export class PostModule {}
