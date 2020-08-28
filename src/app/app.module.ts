import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LeftNavComponent } from "./shared/components/left-nav/left-nav.component";
import { HomeComponent } from "./shared/pages/home/home.component";
import { AriaLiveComponent } from "./shared/pages/aria-live/aria-live.component";
import { PageTitleComponent } from "./shared/pages/page-title/page-title.component";
import { FocusMangeComponent } from "./shared/pages/focus-mange/focus-mange.component";
import { NgAriaComponent } from "./shared/pages/ng-aria/ng-aria.component";
import { ngAria } from "angular-aria/angular-aria.js";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    HomeComponent,
    AriaLiveComponent,
    PageTitleComponent,
    NgAriaComponent,
    FocusMangeComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
