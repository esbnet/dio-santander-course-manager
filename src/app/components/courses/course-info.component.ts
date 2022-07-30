import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from './course';
import { CourseService } from './cource.service';

@Component({ templateUrl: './course-info.component.html' })
export class CourseInfoComponent implements OnInit {
  //@ts-ignore
  course: Course;

  constructor(
    private actvateRoute: ActivatedRoute,
    private couserServise: CourseService
  ) {}

  ngOnInit(): void {
    this.couserServise
    //@ts-ignore
      .retrieveById(+this.actvateRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (course) => (this.course = course),
        error: (err) => console.log('Error', err),
      });
    }
    
    saveCourse(): void {
      this.couserServise.save(this.course).subscribe({
        next: course => console.log('Course saved successfully', course),//
        error: (err) => console.log('Error', err),
    });
  }
}
