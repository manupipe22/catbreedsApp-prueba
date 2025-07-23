import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsPage } from './pages/breeds/breeds.page';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'breeds', component: BreedsPage },
  {
    path: 'breed-detail',
    loadChildren: () =>
      import('./pages/breed-detail/breed-detail.module').then(m => m.BreedDetailPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}