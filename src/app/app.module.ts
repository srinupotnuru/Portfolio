import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParticlesDivComponent } from './particles-div/particles-div.component';
import { ParticlesModule } from 'ngx-particle';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/about/about.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FactsComponent } from './body/facts/facts.component';
import { SkillsComponent } from './body/skills/skills.component';
import { InterestsComponent } from './body/interests/interests.component';
import { ResumeComponent } from './body/resume/resume.component';
import { TestimonialsComponent } from './body/testimonials/testimonials.component';
import { ContactComponent } from './body/contact/contact.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { ApproveComponent } from './approve/approve.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ParticlesDivComponent,
    BodyComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    InterestsComponent,
    ResumeComponent,
    TestimonialsComponent,
    ContactComponent,
    DiscussionsComponent,
    QuestionsComponent,
    ApproveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
