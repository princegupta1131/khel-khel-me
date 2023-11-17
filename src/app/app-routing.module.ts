import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { PitaraComponent } from './components/pitara/pitara.component';
import { CreatePitaraComponent } from './components/create-pitara/create-pitara.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'explore', component: ExploreComponent,
  },
  {
    path: 'pitara', component: PitaraComponent,
  },
  {
    path: 'create-pitara', component: CreatePitaraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
