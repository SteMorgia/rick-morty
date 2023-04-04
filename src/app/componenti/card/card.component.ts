import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/types';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataCharacter: Character | undefined
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    //console.log(this.dataCharacter)
  }
}
