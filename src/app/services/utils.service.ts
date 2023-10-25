import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }
  private titleChange = new Subject<string>();
   languageChange;

  searchSaas(): Observable<any> {
    const url = `https://sunbirdsaas.com//api/content/v1/search?field=publisher`;
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
  
  searchOnest():Observable<any>{
    const url=`https://onest-bap.tekdinext.com/seeker/collection/`
    return this.http.get(url)
  }

  saasCollectionRead(doId): Observable<any> {
    const url = `https://sunbirdsaas.com/action/content/v3/hierarchy/${doId}`
    return this.http.get(url)
  }

  onestCollectionRead(doId): Observable<any> {
    const url = `https://onest-bap.tekdinext.com/seeker/collection/${doId}`
    return this.http.get(url)
  }

  contentRead(doId): Observable<any> {
    const url = `https://sunbirdsaas.com/action/content/v3/read/${doId}?fields=body`
    return this.http.get(url)
  }

  getTitle(){
   return this.titleChange;
  }
  setTitle(title){
    this.titleChange.next(title)
  }

  getLanguage(){
    return this.languageChange;
   }
   setLanguage(language){
     this.languageChange=language
   }
   public drop(event: CdkDragDrop<string[]>) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
  }
}
