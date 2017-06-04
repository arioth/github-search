import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { NotificationService } from './notification.service';
import { User } from './user';

@Injectable()
export class GithubService {
  private userSubject: Subject<User>;
  private followersSubject: Subject<User[]>;

  constructor(
    private http: Http,
    private notificationService: NotificationService
  ) {
    this.userSubject = new Subject<User>();
    this.followersSubject = new Subject<User[]>();
  }

  get userObservable(): Observable<User> {
    return this.userSubject.asObservable();
  }

  get followersObservable(): Observable<User[]> {
    return this.followersSubject.asObservable();
  }

  fetchUser(username: string) {
    this.http.get(`https://api.github.com/users/${username}`)
      .map((res: Response) => res.json())
      .subscribe((user: User) => {
        this.userSubject.next(user);
        this.fetchFollowers(user.followers_url);
      }, () => {
        this.sendErrorMessage();
      });
  }

  private fetchFollowers(followersUrl: string) {
    // clear previous followers
    this.followersSubject.next([]);

    this.http.get(followersUrl)
      .map((res: Response) => res.json())
      .subscribe((followers: User[]) => {
        this.followersSubject.next(followers);
        this.clearErrorMessage();
      }, () => {
        this.sendErrorMessage();
      });
  }

  private clearErrorMessage() {
    this.notificationService.sendMessage(null);
  }

  private sendErrorMessage() {
    this.notificationService.sendMessage('User Not Found');
  }
}
