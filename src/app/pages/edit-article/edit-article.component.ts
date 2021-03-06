import { ArticleService } from './../../api/article.service';
import { Keyword } from './../../model/model';
import { Article } from '../../model/model';
import { ArticleUtilsService } from '../../shared/article-utils.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  public editor_modules;
  public editorInstance: any;
  public cursorInEditor: any;
  public articleUtils: Article = new Article();
  public article: Article = new Article();

  constructor(public articleUtilsService: ArticleUtilsService,
    public articleService: ArticleService,
    public router: Router) { }

  ngOnInit() {
    this.editor_modules = {
      toolbar: {
        container: [
          [{ font: [] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ header: 1 }, { header: 2 }],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }],
          ['link', 'image']
        ]
      }
    };

    this.articleUtilsService.currentArticleUtils.subscribe(currentArticleUtils => {
      if (currentArticleUtils) {
        this.articleUtils = JSON.parse(currentArticleUtils);
        setTimeout(() => {
          this.article.content = this.articleUtils.content;
          this.article.meta = this.articleUtils.meta || {};
          this.article.articleCategory = this.articleUtils.articleCategory;
          this.article.meta.keywords = this.articleUtils.meta.keywords.map(keyword => {
            return keyword.name;
          });
        }, 1000);
      }
    });

    this.article.meta = this.article.meta || {};
  }

  public onEditorCreated(editorObj) {
    editorObj.focus();
    this.editorInstance = editorObj;
    this.cursorInEditor = this.editorInstance.getSelection();
  }

  public viewArticle() {
    // this.article.articleCategory.id = this.articleUtils.articleCategory.id || '1';
    this.articleService.create(this.article).subscribe(response => {
      this.articleUtilsService.updateArticleUtils(this.article);
      this.router.navigate(['/artigo', response.id]);
    });
  }
}

