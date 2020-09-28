import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LeftNavComponent } from "./shared/components/left-nav/left-nav.component";
import { HomeComponent } from "./shared/pages/home/home.component";
import { AriaLiveComponent } from "./shared/pages/aria-live/aria-live.component";
import { PageTitleComponent } from "./shared/pages/page-title/page-title.component";
import { FocusMangeComponent } from "./shared/pages/focus-mange/focus-mange.component";
import { KeyboardNavComponent } from "./shared/pages/keyboard-nav/keyboard-nav.component";
import { AutoFocusDirective } from "./shared/directives/auto-focus.directive";
import { A11yModule } from "@angular/cdk/a11y";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    HomeComponent,
    AriaLiveComponent,
    PageTitleComponent,
    FocusMangeComponent,
    KeyboardNavComponent,
    AutoFocusDirective
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, A11yModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
