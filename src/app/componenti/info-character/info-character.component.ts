import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/core/types';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent {
  id: string | null = ''
  myForm$ = new BehaviorSubject<FormGroup | null>(null);

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  character$ = this.route.params.pipe(
	map((urlParams: Params) => urlParams['id'] as string),
	switchMap(this.apiService.getSingleCharacter$)
  )

  characterAndFormInit$ = this.character$.pipe(
	// non posso passare direttamente la definizione della funzione se no myform$ risulta undefined nello scope correlato
	// tap(this.initializeForm) ---> errore myform$ undefined
	tap((char: Character) => this.initializeForm(char))
  )

  initializeForm(character: Character): void {
	this.myForm$.next(
	  new FormGroup({
		nome: new FormControl(character.name),
		location: new FormControl(character.location),
		provenienza: new FormControl(character.origin.name),
		genere: new FormControl(character.gender),
		status: new FormControl(character.status),
	  })
	)
  }

  saveCharacter(): void {
	// const characterData = this.myForm.value;
	// this.apiService.saveCharacterMock(characterData).subscribe(response => {
	//   console.log('Dati salvati:', response);
	//   alert('Dati salvati con successo!');
	// });
  }
}
