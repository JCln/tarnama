import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PostData } from './post/post-data';
import { PostModule } from './post/post.module';
import { SharedModule } from './shared/shared.module';

// used to create fake backend
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule.forRoot(),
    PostModule,
    InMemoryWebApiModule.forRoot(PostData, { delay: 1000 }),
    AppRoutingModule
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
