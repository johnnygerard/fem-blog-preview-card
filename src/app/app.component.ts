import { ChangeDetectionStrategy, Component } from "@angular/core";
import { PreviewCardComponent } from "./components/preview-card/preview-card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [PreviewCardComponent],
  templateUrl: "./app.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
