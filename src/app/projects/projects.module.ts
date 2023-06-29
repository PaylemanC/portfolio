import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    CardProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProjectComponent
  ]
})
export class ProjectsModule { }
