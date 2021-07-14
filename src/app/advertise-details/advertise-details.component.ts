import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-advertise-details',
  templateUrl: './advertise-details.component.html',
  styleUrls: ['./advertise-details.component.css']
})
export class AdvertiseDetailsComponent implements OnInit {
  title = 'Advertise Details Page';
  adId;
  data = {
    advetise_Qulifi: "",
    advetise_date: "",
    advetise_desc: "",
    advetise_id: "",
    advetise_lastDate: "",
    advetise_title: ""
  }
  showimg: boolean = true;
  constructor(private titleService: Title, private metaTagService: Meta,public service: MyserviceService, private _route: ActivatedRoute) { }

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
    this.adId = +this._route.snapshot.params['id'];
    this.service.getAdvitiserSingle(this.adId).subscribe((res) => {
      this.data = res.document;
      console.log(this.data);
    });
    setInterval(() => {
      this.toggleImg();
    }, 10000);
    
  }

  toggleImg() {
    this.showimg = !this.showimg;
    console.log(this.showimg);
  }

}
