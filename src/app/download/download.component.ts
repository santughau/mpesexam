import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  title = 'Download Page';
  datas: any[] = [];
  pageno = 1;
  pagesize = 100;
  showLoadingIndicator = false;
  errorMessage: any;
  showCard: boolean = false;
  p: number = 1;
  showimg: boolean = true;
  constructor(private titleService: Title, private metaTagService: Meta,private service: MyserviceService,) { }

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
    this.service.getDownloadList(this.pageno, this.pagesize).subscribe((res) => {
      this.datas = res.document.records;
      console.log(this.datas);
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

  goToDownload(id) {
    console.log(id);
    window.open(id, "_blank");
  }

}
