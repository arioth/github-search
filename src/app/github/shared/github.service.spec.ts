import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GithubService } from './github.service';
import { NotificationService } from './notification.service';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubService,
        Http,
        NotificationService,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions }
      ]
    });
  });

  it('is created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
