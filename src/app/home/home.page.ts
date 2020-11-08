import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Loading Indicator
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: {
    ID: number;
    title: string;
    content: string;
    date: string;
  }[] = [];

  constructor(
    public httpClient: HttpClient,
    public loadingController: LoadingController
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    if (!this.posts.length) {
      await loading.present();
    }
    this.httpClient.get('https://public-api.wordpress.com/rest/v1.1/sites/ionicjp.wordpress.com/posts/').subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.posts = data['posts'];
      loading.dismiss();
    });
  }

  trackByFn(index: number, item): number {
    return item.ID;
  }

}
