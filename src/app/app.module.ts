import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CvDownloadButtonComponent } from './components/cv-download-button/cv-download-button.component';
import { HardSkillComponent } from './components/hard-skill/hard-skill.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { EduItemComponent } from './components/edu-item/edu-item.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';

import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { JoinWithSlashPipe } from './shared/pipes/join-with-slash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CvDownloadButtonComponent,
    HardSkillComponent,
    SoftSkillComponent,
    CardProjectComponent,
    EduItemComponent,
    HomeComponent,
    ProjectDetailComponent,
    NotFoundComponent,
    AllProjectsComponent,
    ScrollTopComponent,
    LoaderComponent,
    JoinWithSlashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
