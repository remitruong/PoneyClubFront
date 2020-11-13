import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icourse } from 'src/app/_classes/icourse';
import { Observable } from 'rxjs';
import { User } from 'src/app/_classes';
import { ICoursePlace } from 'src/app/_classes/icourseplace';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  BASE_URL: string = 'https://poneyclub.herokuapp.com/course';
  getCoursesUrl: string = `${this.BASE_URL}/get-courses`;
  addCourseUrl: string = `${this.BASE_URL}/plan`;
  addRecurrentCourseUrl: string = `${this.BASE_URL}/plan/recurrent-course`;
  registerToCourseUrl: string = `${this.BASE_URL}/register`;
  availablePlacesUrl: string =  `${this.BASE_URL}/available-places`;
  findCourseByTeacherUrl: string =  `${this.BASE_URL}/find-course-by-teacher`;
  updateCourseUrl: string =  `${this.BASE_URL}/update-course`;
  cancelCourseUrl: string = `${this.BASE_URL}/cancel-course`;

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Icourse[]> {
    return this.http.get<Icourse[]>(this.getCoursesUrl);
  }

  public addCourse(course: Icourse, idTeacher: number): Observable<Icourse> {
    return this.http.post<Icourse>(this.addCourseUrl + '/' + idTeacher, course);
  }

  public addRecurrentCourse(course: Icourse, recurrence: string): Observable<Icourse[]> {
    return this.http.post<Icourse[]>(this.addRecurrentCourseUrl + '/' + recurrence , course);
  }

  public registerToCourse(user: User, idCourse: number): Observable<ICoursePlace> {
     return this.http.post<ICoursePlace>( this.registerToCourseUrl + '/' + idCourse, user);
  }

  public getAvailablePlaces(idCourse: number): Observable<any> {
    return this.http.get(this.availablePlacesUrl + '/' + idCourse);
  }

  public findCourseByTeacher(idTeacher: number): Observable<any> {
    return this.http.get(this.findCourseByTeacherUrl + '/' + idTeacher);
  }

  public updateCourse(idCourse: number, course: Icourse): Observable<any> {
    return this.http.post(this.updateCourseUrl + '/' + idCourse, course);
  }
  public cancelCourse(idCourse: number, course: Icourse): Observable<any> {
    return this.http.post(this.cancelCourseUrl + '/' + idCourse, course);
  }

}
