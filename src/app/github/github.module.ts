import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GithubComponent } from './github.component';
import { FollowerComponent } from './follower/follower.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [GithubComponent, FollowerComponent],
  exports: [GithubComponent, FollowerComponent]
})
export class GithubModule { }
