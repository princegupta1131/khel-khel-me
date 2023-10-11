import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExploreComponent } from './components/explore/explore.component';
import { PitaraComponent } from './components/pitara/pitara.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { BackbarComponent } from './components/backbar/backbar.component';
import { CardComponent } from './components/card/card.component';
import { CardPComponent } from './components/pitara/card/card.component';
import { UtilService } from './services/utils.service';
import {  HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalStorageService } from './services/localStorage.service';
import { PlayerComponent } from './components/player/player.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    PitaraComponent,
    HeaderbarComponent,
    BackbarComponent,
    CardComponent,
    CardPComponent,
    SafePipe,
    PlayerComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [UtilService,LocalStorageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
