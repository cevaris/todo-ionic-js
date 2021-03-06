import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'kanban', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'kanban', loadChildren: './page/kanban/kanban.module#KanbanPageModule' },
  { path: 'search', loadChildren: './page/search/search.module#SearchPageModule' },
  { path: 'kanban-card-detail', loadChildren: './page/kanban-card-detail/kanban-card-detail.module#KanbanCardDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
