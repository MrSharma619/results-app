import { Component } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  overallScore: number;
  data: any;

  constructor(scoreServ: ScoreService){
    this.data = scoreServ.getData();
    this.overallScore = this.calculateScore();
  }

  calculateScore(){
    return 76;
  }
}
