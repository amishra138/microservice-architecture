import { NgModule } from '@angular/core';

import { CampaignListComponent } from './list/campaign-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


const states: Ng2StateDeclaration[] = [
    {
        name: 'app.campaigns',
        url: '/campaigns',
        views: {
            'main@app': {
                component: CampaignListComponent
            }
        },
        data : {
            title: 'Campaigns'
        }
    }
]

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        UIRouterModule.forChild({states: states}),
        MDBBootstrapModulesPro
    ],
    exports: [],
    declarations: [CampaignListComponent],
    providers: [],
})
export class CampaignModule { }
