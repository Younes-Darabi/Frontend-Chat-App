import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ChatService } from '../services/chat-service';
import { GetInterface } from '../interfaces/get-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  imports: [FormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  chatService = inject(ChatService);
  http = inject(HttpClient);
  getData: GetInterface[] = [];
  postData = {
    name: '',
    message: ''
  };

  post() {
    this.http.post('http://127.0.0.1:8000/', this.postData).subscribe((data) => {
      console.log('Updated config:', data);
      this.get();
      this.clear();
    });
  }

  get() {
    this.chatService.get().subscribe((data) => {
      this.getData = data;
      console.table(this.getData);
    });
  }

  clear() {
    this.postData.name = "";
    this.postData.message = "";
  }


}

// fetch('http://127.0.0.1:8000/', {
//     body: JSON.stringify({ "title": this.postData }),
//     headers : {"Content-Type": "application/json;charset=UTF-8"},
//     method: 'post'
// });

// this.http.get<ChatInterface[]>('http://127.0.0.1:8000/').subscribe((data) => {
//   this.data = data;
//   console.table(data);
// });