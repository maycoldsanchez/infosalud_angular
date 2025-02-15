import { Component, Input, signal, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject, Observable } from "rxjs";
import { DataTableService } from "@services/data-table.service";
import { NgFor } from "@angular/common";
import { CdkTableModule } from "@angular/cdk/table";

type DataDT = Record<string, string>;
@Component({
	selector: "app-custom-table",
	standalone: true,
	imports: [
		MatTableModule,
		FontAwesomeModule,
		MatFormFieldModule,
		MatInputModule,
		MatSortModule,
		NgFor,
		CdkTableModule,
		MatPaginatorModule,
	],
	templateUrl: "./custom-table.component.html",
	styleUrl: "./custom-table.component.scss",
})
export class CustomTableComponent {}
