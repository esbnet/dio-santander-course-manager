import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './cource.service';
import { Course } from './course';

@Component({ templateUrl: './course-info.component.html' })
export class CourseInfoComponent implements OnInit {
  //@ts-ignore
  course: Course;

  constructor(
    private actvateRoute: ActivatedRoute,
    private couserServise: CourseService
  ) {}

  ngOnInit(): void {
    //@ts-ignore
    this.course = this.couserServise.retrieveById(
      //@ts-ignore
      +this.actvateRoute.snapshot.paramMap.get('id')
    );
  }

  saveCourse(): void {
    this.couserServise.save(this.course);
  }
}
