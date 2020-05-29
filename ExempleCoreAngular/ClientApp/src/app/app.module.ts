import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { AppareilService } from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AppareilComponent,
    PrivacyComponent,
    PostComponent,
    BlogComponent,
    AppareilListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'appareil-list', component: AppareilListComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'privacy', component: PrivacyComponent },
    ])
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
