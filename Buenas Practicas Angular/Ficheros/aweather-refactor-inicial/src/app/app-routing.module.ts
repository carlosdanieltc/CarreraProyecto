import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home/login'
    },
    // {
    //     path: '**',
    //     redirectTo: 'home/login'
    // },
    {
        path: 'home', loadChildren: './components/login/components/login.module#LoginModule'
    },
    {
      path: 'weather', loadChildren: './components/weather/components/weather.module#WeatherModule'

    }
];

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
