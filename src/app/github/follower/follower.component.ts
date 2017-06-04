import { Component, Input } from '@angular/core';

import { User } from '../shared/user';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent {
  @Input() follower: User;
}
