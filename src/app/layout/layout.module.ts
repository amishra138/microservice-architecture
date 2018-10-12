import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {UIRouterModule, Ng2StateDeclaration} from "@uirouter/angular"
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

const states: Ng2StateDeclaration[] = [
  {
    name: 'app',
    url: '/app',
    component: PageComponent,
    abstract: true
  }
]

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    MDBBootstrapModulesPro,
    UIRouterModule.forChild({states: states})
  ],
  exports: [],
  declarations: [HeaderComponent, FooterComponent, PageComponent],
  providers: [],
})
export class LayoutModule { }
