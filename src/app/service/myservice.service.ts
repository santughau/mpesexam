import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  url = 'http://localhost/mpsc/';
  constructor(private http: HttpClient) { }

  getAllDepatment(pageno: any, pagesize: any): Observable<any> {
    return this.http.get(
      this.url + 'department/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  getExamList(Id: any): Observable<any> {
    return this.http.get(this.url + 'exam/read_by_exam_departid.php?exam_departId=' + Id);
  }

  getExamPaper(id: any): Observable<any> {
    return this.http.get(this.url + 'exam/read_one.php?id=' + id);
  }

  getQuestionPaper(id: any): Observable<any> {
    return this.http.get(this.url + 'questions/read_by_questions_exam_id.php?questions_exam_id=' + id);
  }
  saveExamResult(id): Observable<any> {
    return;
  }

  getDownloadList(pageno: any, pagesize: any): Observable<any> {
    return this.http.get(
      this.url + 'downloaddata/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  getAdvertiseList(pageno: any, pagesize: any): Observable<any> {
    return this.http.get(
      this.url + 'advetise/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  getAdvitiserSingle(id: any): Observable<any> {
    return this.http.get(this.url + 'advetise/read_one.php?id=' + id);
  }
}
