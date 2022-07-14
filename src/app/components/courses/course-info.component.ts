import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: './course-info.component.html' })
export class CourseInfoComponent implements OnInit {
  courseId: number = 0;
  constructor(private actvateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //@ts-ignore
    this.courseId = this.actvateRoute.snapshot.paramMap.get('id');
  }

}
