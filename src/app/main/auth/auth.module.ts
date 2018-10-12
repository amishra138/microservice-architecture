import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { Login2FaComponent } from './login-2fa/login-2fa.component';

var states: Ng2StateDeclaration[] = [
    {
        name: 'login',
        url: '/login',
        component: LoginComponent,
        data: {
            title: "Login"
        }
    },
    {
        name: 'login2fa',
        url: '/login-verify?token&rememberMe',
        component: Login2FaComponent,
        data: {
            title: "Verify Login"
        }
    }
]

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        UIRouterModule.forChild({ states: states }),
        MDBBootstrapModulesPro
    ],
    exports: [],
    declarations: [LoginComponent, Login2FaComponent],
    providers: [],
})
export class AuthModule { }
