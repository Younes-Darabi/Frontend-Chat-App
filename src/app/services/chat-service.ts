import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetInterface } from '../interfaces/get-interface';

@Injectable({
  providedIn: 'root',
})

export class ChatService {
  http = inject(HttpClient);

  get(): Observable<GetInterface[]> {
    return this.http.get<GetInterface[]>('http://127.0.0.1:8000/');
  }
}