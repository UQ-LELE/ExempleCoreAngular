import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  posts = [
    {
      title: 'Mon premier post',
      content: 'Quamquam artibus minime enim est aut quas eruditi satis politus fuisset aut vellem a quas quod probo est a politus non quidem artibus ita ita deterruisset alios fuisset inquam non.',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Quamquam artibus minime enim est aut quas eruditi satis politus fuisset aut vellem a quas quod probo est a politus non quidem artibus ita ita deterruisset alios fuisset inquam non.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Mon dernier post',
      content: 'Quamquam artibus minime enim est aut quas eruditi satis politus fuisset aut vellem a quas quod probo est a politus non quidem artibus ita ita deterruisset alios fuisset inquam non.',
      loveIts: 0,
      created_at: new Date()
    }];

}
