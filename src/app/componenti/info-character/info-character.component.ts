import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/types';
@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent{
  id: string | null = ''
  //singleCharacter?: Observable<Character>;
  myForm: FormGroup = new FormGroup({});

  constructor (private route:ActivatedRoute, private apiService: ApiService) { }

  getCharacterAndInitializeForm():Observable<Character> {
    return this.getCharacter().pipe(
      tap(this.initializeForm)
    )
  }

  initializeForm(character: Character): void {
    this.myForm = new FormGroup({
      nome: new FormControl(character.name),
      location: new FormControl(character.location),
      provenienza: new FormControl(character.origin.name),
      genere: new FormControl(character.gender),
      status: new FormControl(character.status),
    });
  }

  getCharacter(): Observable<Character> {
    return this.route.params.pipe(switchMap((urlParams) => {
      this.id = urlParams['id'] as string;
      return this.apiService.getSingleCharacter(this.id)
    }))
  }

  saveCharacter(): void {
    const characterData = this.myForm.value;
      this.apiService.saveCharacterMock(characterData).subscribe(response => {
        console.log('Dati salvati:', response);
        alert('Dati salvati con successo!');
      });
    }
  }
