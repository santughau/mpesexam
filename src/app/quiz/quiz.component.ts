import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = 'Quiz Page';
  datas: any[] = [];
  pageno = 1;
  pagesize = 10;
  examList: any[] = [];
  showLoadingIndicator = false;
  errorMessage: any;
  examPaper = {
    department_title: '',
    exam_departId: '',
    exam_id: '',
    exam_name: '',
    exam_noOfQue: '',
    exam_totalMarks: '',
    exam_year: ''
  }

  showCard: boolean = false;
  showimg: boolean = true;
  constructor(private titleService: Title, private metaTagService: Meta, private service: MyserviceService, private _router: Router) { }

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
    this.showCard = false;
    this.showLoadingIndicator = true;
    this.service.getAllDepatment(this.pageno, this.pagesize).subscribe((res) => {
      this.datas = res.document.records;
      this.showLoadingIndicator = false;
    });
    setInterval(() => {
      this.toggleImg();
    }, 10000);
  }

  toggleImg() {
    this.showimg = !this.showimg;
    console.log(this.showimg);
  }

  loadExam(id) {
    this.showCard = false;
    let examid = id.target.value;
    this.examList = [];
    this.showLoadingIndicator = true;
    this.service.getExamList(examid).subscribe((res) => {
      this.examList = res.document.records;

      this.showLoadingIndicator = false;
      console.log(this.examList);
    });
  }

  loadPaper(id) {
    let examPaperId = id.target.value;
    this.showLoadingIndicator = true;
    this.service.getExamPaper(examPaperId).subscribe((res) => {
      this.examPaper = res.document;
      this.showCard = true;
      this.showLoadingIndicator = false;
      console.log(this.examPaper);
    })
  }


  goToQuestion(id) {
    console.log(id);
    this._router.navigate(['/question', id]);
  }

}
