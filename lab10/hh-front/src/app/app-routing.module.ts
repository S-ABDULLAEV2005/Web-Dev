import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component'; // Import your Company component
import { VacancyComponent } from './vacancy/vacancy.component';
const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'vacancy/:companyId', component: VacancyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
