import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { WinterComponent } from './gallery/winter/winter.component';
import { SummerComponent } from './gallery/summer/summer.component';
import { AnualComponent } from './gallery/anual/anual.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ParentscornerComponent } from './parentscorner/parentscorner.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'winter', component: WinterComponent },
  { path: 'summer', component: SummerComponent },
  { path: 'anual', component: AnualComponent },
  { path: 'news', component: NewsComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'infra', component: InfrastructureComponent },
  { path: 'curiculum', component: CurriculumComponent },
  { path: 'parent', component: ParentscornerComponent },
  { path: 'reg', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingmodule{
}
