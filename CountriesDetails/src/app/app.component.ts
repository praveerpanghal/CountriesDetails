import { Component } from '@angular/core';
import { APIService } from './Shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountriesDetails';

  constructor(private dataService: APIService) {
    this.dataService.load();
  }
}
