import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {PostsService} from './services/posts.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostFormComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
