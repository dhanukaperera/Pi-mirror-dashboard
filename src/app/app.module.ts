import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { WeatherComponent } from './components/weather/weather.component';
import { TodoComponent } from './components/todo/todo.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { EventsComponent } from './components/events/events.component';
import { ComplimentsComponent } from './components/compliments/compliments.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    NewsFeedComponent,
    WeatherComponent,
    TodoComponent,
    WeatherForecastComponent,
    EventsComponent,
    ComplimentsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
