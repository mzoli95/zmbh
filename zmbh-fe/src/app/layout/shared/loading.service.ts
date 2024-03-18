import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoadingService{
    private loadingSubject =  new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    showLoaderUnitCompleted<T>(obs$:Observable<T>): Observable<T>{
        //todo
        return null;
    }
    
    loadingOn(){
        this.loadingSubject.next(true);
    }

    loadingOff(){
        this.loadingSubject.next(false);
    }
}