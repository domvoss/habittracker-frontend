import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { ApiResponse } from "../../model/api-response.model";

@Injectable({ providedIn: 'root' })

export class BaseService {

    constructor(private http: HttpClient,
        @Inject('apiUrl') private apiUrl: string) {
    }

    public get<T>(url: string): Observable<T> {
        return this.http.get<ApiResponse<T>>(`${this.apiUrl}/api/${url}`).pipe(
            map((response) => this.processResponse<T>(response)),
            catchError((err) => this.processError<T>(err))
        );
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

    private processResponse<T>(response: ApiResponse<T>): T {
        if (response.success) {
            return response.data;
        } else {
            throw new Error(response.message || 'Unknown API error');
        }
    }

    private processError<T>(error: HttpErrorResponse): Observable<T> {
        return throwError(() => new Error(error.message || 'Server Error'));
    }
}    