import { Component, Input } from "@angular/core";
import { AppareilService } from "../services/appareil.service";


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
})
export class AppareilComponent {

  constructor(private appareilService: AppareilService) {

  }

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

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

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
