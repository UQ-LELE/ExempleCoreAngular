import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: string;


  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.postLoveIts++;
  }

  onDislike() {
    this.postLoveIts--;
  }
}
