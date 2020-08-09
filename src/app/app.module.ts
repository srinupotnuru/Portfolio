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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
