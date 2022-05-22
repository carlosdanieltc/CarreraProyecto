import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { TalkService } from './talk.service';
import { NewTalkComponent } from './new-talk/new-talk.component';
import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './logged-in.guard';

const routes= [
  {'path': 'talks', component: TalksComponent},
  {'path': 'new-talk', component: NewTalkComponent,
  canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent,
    NewTalkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggedInGuard],


  bootstrap: [AppComponent]
})
export class AppModule { }
