import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-griglia',
  templateUrl: './griglia.component.html',
  styleUrls: ['./griglia.component.css']
})
export class GrigliaComponent implements OnInit {

  nameCharacter: string = ''
  data: any
  characters: any
  counter: number = 1


  constructor(private apiService:ApiService) {
    this.searchCharacter(this.nameCharacter)
  }

  ngOnInit(): void {
    this.getCharacterList()

  }
  getNextPage() {
    if(this.counter == 42) {
      return
    } else {
      this.counter++
      this.getCharacterList()
    }
  }

  getPrevPage() {
    if(this.counter == 1) {
      return
    } else {
      this.counter--
      this.getCharacterList()
    }
  }

  getCharacterList() {
    this.data = this.apiService.getPage(this.counter).subscribe((data => {
      this.data = data
      this.characters = this.data.results
      console.log(this.data)
    }))
  }

  searchCharacter(name: string) {
    this.nameCharacter = name
    this.data = this.apiService.filterCharacters(name).subscribe((data => {
      this.data = data
      this.characters = this.data.results
    }))
  }
}
