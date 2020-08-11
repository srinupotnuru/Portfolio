import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', pathMatch: 'full', component: BodyComponent },
  { path: 'discussions', pathMatch: 'full', component: DiscussionsComponent },
  { path: 'myquestions', pathMatch: 'full', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
