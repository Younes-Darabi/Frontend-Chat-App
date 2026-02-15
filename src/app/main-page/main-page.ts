import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ChatInterface } from '../interfaces/chat-interface';
import { ChatService } from '../services/chat-service';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  chatService = inject(ChatService);
  chatDB: ChatInterface[] = [];

  constructor() {
    this.loadChatDB()
  }

  loadChatDB() {
    console.table(this.chatService.getChatDB());
  }
}