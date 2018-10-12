import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';

const states : Ng2StateDeclaration[] = [
    {
        name: 'landing_page',
        url: '/',
        component: LandingPageComponent
    }
]

@NgModule({
    imports: [UIRouterModule.forChild({states: states})],
    exports: [],
    declarations: [LandingPageComponent],
    providers: [],
})
export class LandingPageModule { }
