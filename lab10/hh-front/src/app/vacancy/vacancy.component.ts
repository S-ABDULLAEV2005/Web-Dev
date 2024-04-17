import { Component,  OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';


@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies(): void {
    this.vacancyService.getVacancies()
      .subscribe(vacancies => this.vacancies = vacancies);
  }

  getVacancyDetails(vacancyId: number): void {
    this.vacancyService.getVacancyById(vacancyId)
      .subscribe(vacancy => {
        // Do something with the fetched vacancy details
        console.log(vacancy);
      });
  }
}