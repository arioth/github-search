import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubModule } from './github/github.module';
import { GithubService } from './github/shared/github.service';
import { NotificationService } from './github/shared/notification.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubModule,
    HttpModule
  ],
  providers: [GithubService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
