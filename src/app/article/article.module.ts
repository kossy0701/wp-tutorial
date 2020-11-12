// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// routing
import { ArticlePageRoutingModule } from './article-routing.module';

// pages
import { ArticlePage } from './article.page';

// shared
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ArticlePageRoutingModule
  ],
  declarations: [ArticlePage]
})
export class ArticlePageModule {}
