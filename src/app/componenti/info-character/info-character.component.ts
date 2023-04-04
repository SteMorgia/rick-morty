import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {
  id: string | null = ''
  singleCharacter: Observable<any> | undefined;
  constructor (private route:ActivatedRoute, private apiService:ApiService) { }
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.singleCharacter = this.apiService.getSingleCharacter(this.id!)
      console.log(res['id'])
      console.log('questo è res ', res)
    })
  }
}
