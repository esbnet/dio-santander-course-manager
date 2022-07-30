import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Error404Component } from './components/Error/Error404.component.';
import { AppNavbarComponent } from './components/navbar/navbar.component';
import { CourseModule } from './components/courses/course.module';

@NgModule({
  declarations: [AppComponent, AppNavbarComponent, Error404Component],
  imports: [
    BrowserModule,
    FormsModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: Error404Component },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
