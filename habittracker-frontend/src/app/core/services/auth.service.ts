import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthService {
    constructor(private baseService: BaseService) { }
    
    public getData(): Observable<string> {
        return this.baseService.get<string>('habittask');
    }
}    