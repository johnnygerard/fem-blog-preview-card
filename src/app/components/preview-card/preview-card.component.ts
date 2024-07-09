import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-preview-card",
  standalone: true,
  imports: [],
  templateUrl: "./preview-card.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCardComponent {}
