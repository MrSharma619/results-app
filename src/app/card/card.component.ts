import { Component } from '@angular/core';
import { ScoreService } from '../services/score.service';

interface Subject {
  category: string;
  score: number;
  icon: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  overallScore: number = 0;
  data: any;
  reaction: Subject | undefined;
  memory: Subject | undefined;
  verbal: Subject | undefined;
  visual: Subject | undefined;

  constructor(scoreServ: ScoreService) {
    scoreServ.getData().then((res) => {
      //console.log(res);

      this.data = res;

      this.overallScore = Math.round(this.calculateScore());

      this.reaction = this.data[0];

      this.memory = this.data[1];

      this.verbal = this.data[2];

      this.visual = this.data[3];

      //console.log(this.data);
    });
  }

  calculateScore() {
    //console.log(this.data);

    const sum = this.data
      .map((element: any) => element.score)
      .reduce((a: number, b: number) => a + b, 0);

    const average = sum / this.data.length;

    //console.log(average);

    return average;
  }
}
