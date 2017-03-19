
import { Routes, RouterModule } from '@angular/router';

import { LoginView, PaymentsListView } from './_views';

import { AuthGuard } from './_guards';

const appRoutes :Routes = [
    { path: 'login', component: LoginView },
    { path: '', component: PaymentsListView, canActivate: [AuthGuard] },

    { path: '**', redirectTo : '' }
];

export const routing = RouterModule.forRoot(appRoutes);