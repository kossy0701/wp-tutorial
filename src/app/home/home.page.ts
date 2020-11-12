import { Component } from '@angular/core';

// Loading Indicator
import { LoadingController } from '@ionic/angular';

// fetch post data service
import { WordpressService } from '../services/wordpress.service';

// interfaces
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: IPost[] = [];

  constructor(
    public loadingController: LoadingController,
    public wordpressService: WordpressService
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    if (!this.posts.length) {
      await loading.present();
    }
    this.wordpressService.getPosts().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.posts = data['posts'];
      loading.dismiss();
    });
  }

  trackByFn(index: number, item): number {
    return item.ID;
  }

}
