import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { PitaraComponent } from './components/pitara/pitara.component';
import { PitaraSearchComponent } from './components/pitara-search/pitara-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'explore', component: ExploreComponent
  },
  {
    path: 'pitara', component: PitaraComponent
  },
  {
    path: 'pitara-search/:id', component: PitaraSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
