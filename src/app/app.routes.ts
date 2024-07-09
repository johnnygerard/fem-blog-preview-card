import { Routes } from "@angular/router";
import { PreviewCardComponent } from "./components/preview-card/preview-card.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PreviewCardComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
