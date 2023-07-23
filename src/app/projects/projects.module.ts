import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { JoinWithSlashPipe } from './pipes/join-with-slash.pipe';

@NgModule({
  declarations: [
    CardProjectComponent,
    JoinWithSlashPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProjectComponent
  ]
})
export class ProjectsModule { }
