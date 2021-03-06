import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ArticleUtilsService } from '../shared/article-utils.service';
import { QuestionService } from '../api/question.service';
import { ArticleCategoryService } from '../api/article-category.service';
import { TopicService } from '../api/topic.service';
import { ArticleService } from './../api/article.service';
import { SeoService } from './seo/seo.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    ArticleCategoryService,
    QuestionService,
    ArticleUtilsService,
    TopicService,
    ArticleService,
    SeoService
  ]
})
export class CoreModule { }
