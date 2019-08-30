import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingmodule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatBadgeModule } from '@angular/material/badge';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent, DialogPrincipalComponent } from './navigation/header/header.component';
import { SidenavListComponent, DialogPrincSideComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterAreaComponent, DialogDeveloperComponent } from './footer-area/footer-area.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { AnualComponent } from './gallery/anual/anual.component';
import { WinterComponent } from './gallery/winter/winter.component';
import { SummerComponent } from './gallery/summer/summer.component';
import { SchoolService } from './shared/school.service';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ParentscornerComponent } from './parentscorner/parentscorner.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    DialogPrincipalComponent,
    SidenavListComponent,
    DialogPrincSideComponent,
    FooterAreaComponent,
    DialogDeveloperComponent,
    GalleryComponent,
    AboutComponent,
    NewsComponent,
    InfrastructureComponent,
    AnualComponent,
    WinterComponent,
    SummerComponent,
    CurriculumComponent,
    ParentscornerComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingmodule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatBadgeModule
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogPrincipalComponent, DialogPrincSideComponent, DialogDeveloperComponent ]
})
export class AppModule { }
