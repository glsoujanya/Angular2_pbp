import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { name = 'Angular 2'; source = 'PluralSight'; PSColor = 'green';
 changeColor() { this.PSColor = this.PSColor === 'green' ? 'blue' : 'green' }
}
