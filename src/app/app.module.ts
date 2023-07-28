import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componenti/card/card.component';
import { InfoCharacterComponent } from './componenti/info-character/info-character.component';
import { GrigliaComponent } from './componenti/griglia/griglia.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InfoCharacterComponent,
    GrigliaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
