import { HomeComponent } from './common/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtsComponent } from './pages/debts/debts.component';


const routes: Routes = [
  { path: 'debts', component: DebtsComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
