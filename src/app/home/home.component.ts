import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'MPSC Exam, Arogya bharati, talathi exam, police bhatri' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Gaurav Kumar' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-07-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }



}
