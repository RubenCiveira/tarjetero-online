import { ChangeDetectionStrategy, Component } from '@angular/core';
import 'tw-elements';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarjetero-online';
}
