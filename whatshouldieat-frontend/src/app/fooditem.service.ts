import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { FoodItemModel } from './food-item-model.model';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  foodItems : any = [];
  /* // demoFoodItems : FoodItemModel[] =  ;
  private messageSource = new BehaviorSubject(this.foodItems);
  currentMessage = this.messageSource.asObservable();
  */

  private foodServiceApiUrl = "http://fooditemservice-service:8081/fooditem";
  private foodServiceLocalDemoUrl = "/assets/fooditem-demo-data.json";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
   //   Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  loadData() : Observable<any>{
     return this.http.get<FoodItemModel>(this.foodServiceApiUrl)
            .pipe(
              catchError(this.handleError)
            );
  }

  save(foodItem: FoodItemModel): Observable<FoodItemModel>{
    console.log("service saved item; "+ foodItem.name)
    if(foodItem.id != null){
      //update
      const url = `${this.foodServiceApiUrl}/${foodItem.id}`; 
      return this.http.put<FoodItemModel>(url , foodItem, this.httpOptions)
              .pipe(
                catchError(this.handleError)
              );
    }else{
      //create new
        return this.http.post<FoodItemModel>(this.foodServiceApiUrl, foodItem, this.httpOptions)
          .pipe(
            catchError(this.handleError)
          );
    }
  }

  delete(foodItem: FoodItemModel): Observable<unknown>{

      const url = `${this.foodServiceApiUrl}/${foodItem.id}`; // DELETE api/heroes/42
      return this.http.delete(url, this.httpOptions)
              .pipe(
                catchError(this.handleError)
              );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }



}
