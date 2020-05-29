import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
})
export class AppareilComponent {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }
}
