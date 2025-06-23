import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './api/post-service.service';
import { ListComponentComponent } from './list-component/list-component.component';
import { IUser } from './model/users.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListComponentComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  listUsers: IUser[] = [];

  constructor(private postService: PostServiceService){}

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.getPosts().subscribe({
      next: (res: IUser[]) => {
        this.listUsers = res;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    })
  }

}
