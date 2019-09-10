import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { WpCardComponent } from './wp-card/wp-card.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [WpCardComponent, HeaderComponent, PostsComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported ONLY in AppModule.');
    }
  }
}
