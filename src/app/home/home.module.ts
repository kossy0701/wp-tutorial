// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// pages
import { HomePage } from './home.page';
import { ArticlePage } from '../article/article.page';

// routing
import { HomePageRoutingModule } from './home-routing.module';

// shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: ':articleId',
        component: ArticlePage
      }
    ])
  ],
  declarations: [
    HomePage,
    ArticlePage
  ]
})

export class HomePageModule {}
