import { Component, Input, signal, ViewChild } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { UsersService } from "@services/users.service";
import { BehaviorSubject } from "rxjs";

@Component({
	selector: "app-table-users",
	standalone: true,
	imports: [MatTableModule, FontAwesomeModule, MatPaginatorModule],
	templateUrl: "./table-users.component.html",
	styleUrl: "./table-users.component.scss",
})
export class TableUsersComponent {
	iconSearch = faMagnifyingGlass;
	iconAdd = faPlus;
	@Input({ required: true }) path: string = "";
	@Input({ required: true }) displayedColumns: any[] = [];
	@Input({ required: true }) displayedNameColumns: any[] = [];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	dataSource = new MatTableDataSource();
	dataSubject = new BehaviorSubject<any[]>([]);
	searchValue = signal("");

	constructor(private userService: UsersService) {}

	ngOnInit() {
		this.userService.getData().subscribe({
			next: (value) => {
				this.dataSource = new MatTableDataSource(value.data);
				console.log(value);
			},
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.searchValue.set(filterValue);
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
