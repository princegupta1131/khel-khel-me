import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }
  private titleChange = new Subject<string>();
  search(): Observable<any> {
    const url = `https://sunbirdsaas.com//api/content/v1/search`;// Add Chat service URL here
    let body = {
      "request": {
        "filters": {
          "objectType": "Content",
          "channel": "013812745304276992183",
          "keywords": [
            "djp_master"
          ],
          "status": ["Live"]
        },
        "fields": [
          
        ]
      }
    }
    return this.http.post(url, body)
  }

  collectionRead(doId): Observable<any> {
    const url = `https://sunbirdsaas.com/action/content/v3/hierarchy/${doId}`
    return this.http.get(url)
  }

  getTitle(){
   return this.titleChange;
  }
  setTitle(title){
    this.titleChange.next(title)
  }
}
