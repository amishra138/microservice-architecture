import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { ChartsModule } from 'ng-uikit-pro-standard'
import { DemoComponent } from '../demo/demo.component';
const states: Ng2StateDeclaration[] = [
    {
        name: 'app.dashboard',
        url: '/dashboard',
        views: {
            'main@app': {
                component: DashboardComponent
            }
        },
        data: {
            title: 'Dashboard'
        }
    },
    {
        name: 'app.demo',
        url: '/demo',
        views: {
            'main@app': {
                component: DemoComponent
            }
        },
        data: {
            title: 'Demo'
        }
    }
]

@NgModule({
    imports: [ UIRouterModule.forChild({states: states}), MDBBootstrapModulesPro, ChartsModule],
    exports: [],
    declarations: [DashboardComponent, DemoComponent],
    providers: [],
})
export class DashboardModule { }
