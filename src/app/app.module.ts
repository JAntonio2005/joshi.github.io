import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperinceComponent } from './work-experince/work-experince.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { AppWorkComponent } from './app-work/app-work.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppLenguagesComponent } from './app-lenguages/app-lenguages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperinceComponent,
    EducationComponent,
    SkillsComponent,
    CertificatesComponent,
    LanguagesComponent,
    InterestsComponent,
    AppWorkComponent,
    ExperienceComponent,
    AppLenguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
