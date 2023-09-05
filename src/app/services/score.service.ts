import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor() {}

  getData() {
    const url = 'assets/data.json';

    const fetchJson = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();

        //console.log(response);

        return response;
      } catch (error) {
        console.log(error);
      }
    };

    return fetchJson();
  }
}
