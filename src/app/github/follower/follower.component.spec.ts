import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerComponent } from './follower.component';
import { user } from '../shared/mock-github.service';

describe('FollowerComponent', () => {
  let component: FollowerComponent;
  let fixture: ComponentFixture<FollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerComponent);
    component = fixture.componentInstance;
    component.follower = user;
    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('display the username', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toEqual(user.login);
  });

  it('display the image', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image.getAttribute('src')).toEqual(user.avatar_url);
  });
});
