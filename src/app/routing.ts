
import { Routes, RouterModule } from '@angular/router';

import { LoginView, PaymentsListView, DashboardView } from './_views';

import { AuthGuard } from '../modules/jwt-auth/_guards';

const appRoutes :Routes = [
    { path: 'login', component: LoginView },
    { path: 'payments', component: PaymentsListView, canActivate: [AuthGuard] },
    { path: '', component: DashboardView, canActivate: [AuthGuard] },

    { path: '**', redirectTo : '' }
];

export const routing = RouterModule.forRoot(appRoutes);