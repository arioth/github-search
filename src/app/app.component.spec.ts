import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { GithubModule } from './github/github.module';
import { NotificationService } from './github/shared/notification.service';
import { GithubService } from './github/shared/github.service';
import { MockGithubService } from './github/shared/mock-github.service';

describe('AppComponent', () => {
  let mockGithubService: MockGithubService;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    mockGithubService = new MockGithubService();

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [GithubModule],
      providers: [
        NotificationService,
        { provide: GithubService, useValue: mockGithubService }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });
  }));

  it('creates the app', () => {
    expect(app).toBeTruthy();
  });

  it('displays the GithubComponent', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-github')).toBeTruthy();
  }));
});
