import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface GetInterface {
    id: number;
    name: string;
    message: string;
    created_at: string;
}

@Component({
  selector: 'app-main-page',
  imports: [FormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  http = inject(HttpClient);
  getData: GetInterface[] = [];
  postData = {
    name: '',
    message: ''
  };

  get() {
    this.http.get<GetInterface[]>('http://127.0.0.1:8000/').subscribe((data) => {
      this.getData = data;
      console.table(this.getData);
    });
  }

  post() {
    this.http.post('http://127.0.0.1:8000/', this.postData).subscribe((data) => {
      console.log('Updated config:', data);
      this.get();
      this.clear();
    });
  }

  clear() {
    this.postData.name = "";
    this.postData.message = "";
  }
}