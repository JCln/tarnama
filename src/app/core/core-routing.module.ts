import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostIdComponent } from './../post/post-id/post-id.component';
import { WpCardComponent } from './wp-card/wp-card.component';

const routes: Routes = [{ path: 'WpCard', component: WpCardComponent },
{path: 'postList', component: PostIdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
