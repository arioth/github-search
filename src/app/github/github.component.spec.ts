import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GithubComponent } from './github.component';
import { GithubService } from './shared/github.service';
import { MockGithubService } from './shared/mock-github.service';
import { NotificationService } from './shared/notification.service';
import { FollowerComponent } from './follower/follower.component';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;
  let mockGithubService: MockGithubService;

  beforeEach(async(() => {
    mockGithubService = new MockGithubService();

    TestBed.configureTestingModule({
      declarations: [ GithubComponent, FollowerComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      providers: [
        NotificationService,
        { provide: GithubService, useValue: mockGithubService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
