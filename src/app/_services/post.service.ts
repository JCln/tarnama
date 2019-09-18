import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'api/posts';

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getPost(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
}
