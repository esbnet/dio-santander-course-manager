import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './components/courses/course.module';
import { CoreModule } from './core/core.module';

// import { Error404Component } from './components/Error/Error404.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
