export class Message {
  text: string;
  isChatbot: boolean;
  sendAt: Date;
  typeMessage: string;
  model: string;
}

export class UserApp {
  name: string;
  email: string;
}

export class ArticleCategory {
  id: string;
  name: string;
}

export class Question {
  id: string;
  name: string;
  topic = new Topic();
  meta: any;
}

export class Topic {
  id: string;
  name: string;
  description: string;
  topicKeywords: Array<Keyword>;
  articleCategory = new ArticleCategory();
  meta: any;
}

export class Keyword {
  id: string;
  name: string;
}

export class Article {
  id: string;
  title: string;
  content: string;
  created: Date;
  modified: Date;
  meta: any;
  seoUrl: string;
  seoMetaDescription: string;
  articleCategory = new ArticleCategory();
}

export class PageSeoSetup {
  title: string;
  description: string;
  keywords: Array<string>;
}
