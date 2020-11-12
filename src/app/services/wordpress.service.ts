// core modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interfaces
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(public httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get<{ posts: IPost[]}>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/');
  }

  getArticle(id: number) {
    return this.httpClient.get<IPost>('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/' + id);
  }
}
