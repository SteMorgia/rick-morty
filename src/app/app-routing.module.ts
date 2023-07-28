import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrigliaComponent } from './componenti/griglia/griglia.component';
import { InfoCharacterComponent } from './componenti/info-character/info-character.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/characters'},
  {path:'characters', component: GrigliaComponent},
  {path:'character/:id', component:InfoCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
