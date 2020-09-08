import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'verify',
    pathMatch: 'full'
  },

  {
    path: 'response',
    loadChildren: () => import('./response(oldcode)/response.module').then( m => m.ResponsePageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify(newcode)/verify.module').then( m => m.VerifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
