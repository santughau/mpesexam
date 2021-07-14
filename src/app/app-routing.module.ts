import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseDetailsComponent } from './advertise-details/advertise-details.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'advertise', component: AdvertiseComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'question/:id', component: QuestionsComponent },
  { path: 'advertise-details/:id', component: AdvertiseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
