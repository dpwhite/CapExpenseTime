import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailComponent, ProjectListComponent, ProjectListResolver, ProjectThumbnailComponent, ProjectService } from './projects/index';
import { appRoutes } from './routes';
import { AppMaterialModule } from './appmaterial.module';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

@NgModule({
  exports: [
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectThumbnailComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    //RouterModule.forRoot([
    //  { path: '', component: HomeComponent, pathMatch: 'full' },
    //  { path: 'counter', component: CounterComponent },
    //  { path: 'fetch-data', component: FetchDataComponent },
    //]),
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [ProjectService, ProjectListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
