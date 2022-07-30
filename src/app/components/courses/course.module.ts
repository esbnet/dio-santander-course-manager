import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { CommonModule } from '@angular/common';
import { StarModule } from 'src/app/shared/component/star/star.module';
import { AppPipeModule } from 'src/app/shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseInfoComponent, 
    CourseListComponent, 
  ],
  imports: [
    AppPipeModule,    StarModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
    ]),
  ],
})

export class CourseModule {}
