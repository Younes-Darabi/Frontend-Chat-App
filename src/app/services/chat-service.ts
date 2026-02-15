import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatInterface } from '../interfaces/chat-interface';

@Injectable({
  providedIn: 'root',
})

export class ChatService {
  http = inject(HttpClient);

  async getChatDB() {
    const data = await this.http.get<ChatInterface[]>('http://127.0.0.1:8000/').subscribe((data) => {
      console.table(data);
      return data;
    });
  }
}