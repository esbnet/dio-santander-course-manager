import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Course 1',
        imageUrl: './assets/images/http.png',
        price: 145.99,
        code: '321',
        duration: 180,
        rating: 5,
        releaseDate: '25/03/2022',
      },
      {
        id: 1,
        name: 'Course 2',
        imageUrl: './assets/images/cli.png',
        price: 99.99,
        code: '123',
        duration: 120,
        rating: 3.7,
        releaseDate: '25/06/2022',
      },
    ];
  }
}
