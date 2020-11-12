// Core Modules
import { Component, OnInit } from '@angular/core';

// to get article ID
import { ActivatedRoute, ParamMap } from '@angular/router';

// fetch article with ID
import { WordpressService } from '../services/wordpress.service';

// interfaces
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  ID: number;
  post: IPost = {
    ID: null,
    title: null,
    content: null,
    date: null
  };

  constructor(
    public route: ActivatedRoute,
    public wordpressService: WordpressService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ID = parseInt(params.get('articleId'), 10);
    });
  }

  ionViewDidEnter() {
    this.wordpressService.getArticle(this.ID).subscribe(data => {
      this.post = data;
    });
  }

}
