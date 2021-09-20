import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '/assets/images/angular_logo.png',
                price: 99.99,
                code: 'AN-01',
                duration: 120,
                rating: 4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'React',
                imageUrl: '/assets/images/react_logo.png',
                price: 59.99,
                code: 'RE-01',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 1, 2019'
            }
            
        ]
    }

}