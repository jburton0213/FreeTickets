import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const appRoutes: Routes = [
	{ path: '', component: TicketListComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(appRoutes)
	],
	declarations: [TicketsComponent, TicketListComponent]
})
export class TicketsModule { }
