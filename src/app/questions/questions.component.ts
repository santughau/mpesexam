import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import { Meta, Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  title = 'Question Page';
  show: boolean = true;
  btnDissabled: boolean = true;
  questions: any = [];
  district: any[] = [];
  taluka: any[] = [];
  userAnswer: string = "";
  question_count = 0;
  buttonTitle: string = 'Next';
  correctAnswer: number = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000 * 60)) / 1000);
  minutes = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  time = 0;
  formatted_sec: any = "00";
  formatted_min: any = "00";
  stopTimer: any;
  distId: number = 0;
  examId: any;
  result = {
    fullName: '',
    mobile: '',
    dist: '',
    tal: ''
  };
  uid = "";
  registerData = {
    profile_fullname: "",
    profile_mobile: "",
    profile_email: "",
    profile_distId: "",
    profile_taluka: "",
    profile_password: "",
    profile_uid: "",
    profile_id: ""
  };
  saveData = {}
  showimg: boolean = true;
  constructor(private titleService: Title, private metaTagService: Meta,private router: Router, public service: MyserviceService, private _route: ActivatedRoute) { }

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
    this.userAnswer = "";
    this.question_count = 0;
    this.correctAnswer = 0;
    this.formatted_min = "00";
    this.formatted_sec = "00";
    this.time = 0;
    this.questions = [];
    this.examId = +this._route.snapshot.params['id'];
    this.service.getQuestionPaper(this.examId).subscribe((res) => {
      this.questions = res.document.records;
      console.log(this.questions);
    });
    this.timer();
    setInterval(() => {
      this.toggleImg();
    }, 10000);
  }

  toggleImg() {
    this.showimg = !this.showimg;
    console.log(this.showimg);
  }

  toggleClass(item?: any) {
    this.btnDissabled = false;
    if (item == 0) {
      this.userAnswer = "A"
    } else if (item == 1) {
      this.userAnswer = "B"
    } else if (item == 2) {
      this.userAnswer = "C"
    } else if (item == 3) {
      this.userAnswer = "D"
    } else {

    }


    if (this.userAnswer == this.questions[this.question_count].answer) {
      this.correctAnswer++;
      let options = document.querySelectorAll("div.option");

      let indicator = document.querySelectorAll(".answers-indicator div");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("correct");
        options[i].classList.add("already-answered");

      }
      options[item].classList.add("correct");
      indicator[this.question_count].classList.add("correct");

    } else {
      let options = document.querySelectorAll("div.option");
      let indicator = document.querySelectorAll(".answers-indicator div");
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("wrong");
        options[i].classList.add("already-answered");
      }
      options[item].classList.add("wrong");
      indicator[this.question_count].classList.add("wrong");
      if (this.questions[this.question_count].answer == 'A') {
        setTimeout(() => {
          options[0].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'B') {
        setTimeout(() => {
          options[1].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'C') {
        setTimeout(() => {
          options[2].classList.add("correct");
        }, 2000)

      }
      if (this.questions[this.question_count].answer == 'D') {
        setTimeout(() => {
          options[3].classList.add("correct");
        }, 2000)
      }
    }
  }



  timer() {
    this.stopTimer = setInterval(() => {
      this.time++;
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
      this.formatted_sec = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
      this.formatted_min = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`
    }, 1000)
  }

  next() {
    this.btnDissabled = true;
    if (this.question_count == this.questions.length - 1) {
      this.show = false;
      this.onSave();
    }
    if (this.question_count == this.questions.length - 2) {
      this.buttonTitle = "Finish";
      clearInterval(this.stopTimer);

    }
    this.question_count++;
  }

  onSave() {
    this.saveData = {
      leaderBoard_profileId: this.registerData.profile_id,
      leaderboard_mobile: this.registerData.profile_mobile,
      leaderBoard_exam_id: this.examId,
      leaderboard_time: this.formatted_min + ':' + this.formatted_sec,
      leaderBoard_marks: (100 * this.correctAnswer / this.questions.length).toFixed(2)
    }

    this.service.saveExamResult(this.saveData).subscribe((res) => {


    }, error => {


    })

  }



}
