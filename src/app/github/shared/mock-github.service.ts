import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { User } from './user';

export const user = {
  login: 'johndoe',
  avatar_url: 'https://robohash.org/johndoe.png?size=100x100',
  followers_url: 'https://api.github.com/users/johndoe/followers'
};

export const followers = [
  {
    login: 'jonsnow',
    avatar_url: 'https://robohash.org/jonsnow.png?size=100x100',
    followers_url: 'https://api.github.com/users/jonsnow/followers'
  },
  {
    login: 'aryastark',
    avatar_url: 'https://robohash.org/aryastark.png?size=100x100',
    followers_url: 'https://api.github.com/users/aryastark/followers'
  }
];

export class MockGithubService {
  private userSubject: Subject<User>;
  private followersSubject: Subject<User[]>;

  constructor() {
    this.userSubject = new Subject<User>();
    this.followersSubject = new Subject<User[]>();
  }

  get userObservable(): Observable<User> {
    return this.userSubject.asObservable();
  }

  get followersObservable(): Observable<User[]> {
    return this.followersSubject.asObservable();
  }

  fetchUser() {
    this.userSubject.next(user);
    this.followersSubject.next(followers);
  }
}
