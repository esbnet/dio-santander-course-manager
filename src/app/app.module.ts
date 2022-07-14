import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseInfoComponent } from './components/courses/course-info.component';

import { CourseListComponent } from './components/courses/course-list.component';
import { Error404Component } from './components/Error/Error404.component.';
import { AppNavbarComponent } from './components/navbar/navbar.component';
import { ReplacePipe } from './components/pipe/replace.pipe';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    AppNavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: Error404Component },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
