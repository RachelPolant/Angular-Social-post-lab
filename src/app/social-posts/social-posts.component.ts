import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Typescript',
      thought: 'Like JavaScript, but easier.',
    },
    {
      title: 'HTML/CSS',
      thought: 'Show off your style!',
    },
    {
      title: 'JavaScript',
      thought: "It's like math.",
    },
    {
      title: 'Angular',
      thought: 'Brew some tea while it downloads.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit = (posts: Post): void => {
    this.posts.unshift(posts);
  };
  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };

  showForm = ():void => {
   
  };
}
