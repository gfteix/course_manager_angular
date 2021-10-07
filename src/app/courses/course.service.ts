import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({ //tornando essa classae elegível para ainjeção de dependência
    providedIn: "root"  // seja carregado na root da aplicação
})
export class CourseService{

    private courseUrl: string = 
    "http://localhost:3100/api/courses";

    constructor(private httpCliente: HttpClient){

    }
    retrieveAll(): Observable<Course[]> {
        //padrão de retorno de um httpCliente é um observable
        return this.httpCliente.get<Course[]>(this.courseUrl);
    }

    retrieveById(id: number): Observable<Course>{
        return this.httpCliente.get<Course>(`${this.courseUrl}/${id}`)
;    }
    save(course: Course): Observable<Course>
    {
        if(course.id){
            return this.httpCliente.put<Course>(`${this.courseUrl}/${course.id}`, course);
        }else{
            return this.httpCliente.post<Course>(`${this.courseUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpCliente.delete<any>(`${this.courseUrl}/${id}`);
    }
}
