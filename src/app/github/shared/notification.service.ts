import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationService {
  private messageSubject: Subject<string>;

  constructor() {
    this.messageSubject = new Subject<string>();
  }

  get messageObservable(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
