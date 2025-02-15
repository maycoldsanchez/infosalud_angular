import { Component } from "@angular/core";
import { CustomTableComponent } from "@shared/custom-table/custom-table.component";

export interface Users {
	id: string;
	name: string;
	email: string;
	rol: string;
}

@Component({
	selector: "app-user",
	standalone: true,
	imports: [CustomTableComponent],
	templateUrl: "./user.component.html",
	styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  tablecolumn = [
    id: 'Id'
  ];
}
