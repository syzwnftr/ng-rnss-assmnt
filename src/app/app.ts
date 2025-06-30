import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SqlQuestion } from './components/sql-question/sql-question';
import { DotNetQuestion } from './components/dot-net-question/dot-net-question';
// import { RouterOutlet } from '@angular/router';

interface Person {
  no: number;
  name: string;
  age: number;
  nationality?: string; // optional
}

@Component({
  selector: 'app-root',
  imports: [MatTabsModule, SqlQuestion, DotNetQuestion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-rnss-assment';

  isShowTable = false
  people: Person[] = []

  constructor(private http: HttpClient) { }

  showTable() {
    this.isShowTable = !this.isShowTable
    this.people = [
      { no: 1, name: 'Alex', age: 23 },
      { no: 2, name: 'Mia', age: 30 },
      { no: 3, name: 'Zayn', age: 28 },
      { no: 4, name: 'Nathaniel', age: 41 },
      { no: 5, name: 'Susan', age: 32 },
    ]


    this.people.forEach((person, index) => {
      if (person.age > 30) {
        this.http
          .get<any>(`https://api.nationalize.io/?name=${person.name}`)
          .subscribe({
            next: (res) => {
              const topCountry = res.country?.[0];
              this.people[index].nationality = topCountry?.country_id ?? 'N/A';
            },
            error: () => {
              this.people[index].nationality = 'Error';
            },
          });
      }
    })
  }
}
