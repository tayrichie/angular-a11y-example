import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/pages/home/home.component";
import { AriaLiveComponent } from "./shared/pages/aria-live/aria-live.component";
import { PageTitleComponent } from "./shared/pages/page-title/page-title.component";
import { FocusMangeComponent } from "./shared/pages/focus-mange/focus-mange.component";
import { KeyboardNavComponent } from "./shared/pages/keyboard-nav/keyboard-nav.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aria-live", component: AriaLiveComponent },
  { path: "page-title", component: PageTitleComponent },
  { path: "focus", component: FocusMangeComponent },
  { path: "keyboard-navigation", component: KeyboardNavComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // anytime a route changes, put focus on the body
  // add aria-current to the active link
}
