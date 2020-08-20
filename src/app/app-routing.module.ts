import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { QuestionsComponent } from './questions/questions.component';
import { ApproveComponent } from './approve/approve.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'home', component: BodyComponent },
  { path: 'discussions', component: DiscussionsComponent },
  { path: 'myquestions', component: QuestionsComponent },
  { path: 'approve', component: ApproveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
