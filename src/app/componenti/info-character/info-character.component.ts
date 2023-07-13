import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {
  id: string | null = ''
  singleCharacter: Observable<any> | undefined;
  myForm: FormGroup = new FormGroup({});

  constructor (private route:ActivatedRoute, private apiService: ApiService) { }
  ngOnInit(): void {
    this.getCharacter()
    this.myForm = new FormGroup({
      nome: new FormControl(),
      location: new FormControl(),
      provenienza: new FormControl(),
      genere: new FormControl(),
    });

    this.singleCharacter?.subscribe(character => {
      if (character) {
        this.myForm.patchValue({
          nome: character.name,
          location: character.location.name,
          provenienza: character.origin.name,
          genere: character.gender
        })
      }
    })
  }

  getCharacter(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
      this.singleCharacter = this.apiService.getSingleCharacter(this.id!)
      console.log(res['id'])
      console.log('questo è res ', res)
    })
  }

  saveCharacter(): void {
    const characterData = this.myForm.value;
    this.apiService.saveCharacter(characterData).subscribe(response => {
      console.log('Dati salvati:', response);
      alert('Dati salvati con successo!');
    });
  }
}
