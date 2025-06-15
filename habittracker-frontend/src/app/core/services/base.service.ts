import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class BaseService {

    constructor(private http: HttpClient,
        @Inject('apiUrl') private apiUrl: string) {
    }

    public get<T>(url: string): Observable<T> {
        return this.http.get<{ message: T }>(`${this.apiUrl}/api/${url}`).pipe(map(response => response.message));
    }

    public post<T>(url: string, body: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/api/${url}`, body);
    }

    public put<T>(url: string, body: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/api/${url}`, body);
    }

    public delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/api/${url}`);

    }
}    