import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';

const appRoutes: Routes = [
	{ path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule' }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes)

	],
	exports: [
		ContentComponent
	],
	declarations: [ ContentComponent ]
})
export class ContentModule { }
