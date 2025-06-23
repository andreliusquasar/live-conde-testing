import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IUser } from '../model/users.interface';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.scss'
})
export class ListComponentComponent {
  @Input() users: IUser[] = [];

}
