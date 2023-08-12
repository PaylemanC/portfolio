import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CvDownloadButtonComponent } from './shared/components/cv-download-button/cv-download-button.component';
import { HardSkillComponent } from './components/hard-skill/hard-skill.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { EduItemComponent } from './components/edu-item/edu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CvDownloadButtonComponent,
    HardSkillComponent,
    SoftSkillComponent,
    LoaderComponent,
    EduItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
