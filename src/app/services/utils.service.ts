import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

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
          "name",
          "description",
          "keywords",
          "mimeType",
          "primaryCategory",
          "status",
          "artifactUrl"
        ]
      }
    }
    return this.http.post(url, body)
  }
}
