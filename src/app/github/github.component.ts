import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GithubService } from './shared/github.service';
import { NotificationService } from './shared/notification.service';
import { User } from './shared/user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: User;
  followers: User[];
  message: string;
  searchForm: FormGroup;

  constructor(
    private githubService: GithubService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.searchForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^\w+$/)]]
    });
  }

  ngOnInit() {
    this.githubService.userObservable.subscribe((user: User) => {
      this.user = user;
    });

    this.githubService.followersObservable.subscribe((followers: User[]) => {
      this.followers = followers;
    });

    this.notificationService.messageObservable.subscribe((message: string) => {
      this.message = message;
    });
  }

  onSubmit() {
    this.githubService.fetchUser(this.searchForm.value.username);
  }
}
