import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogexampleComponent, {
      data: {
        name: 'Harsh',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result: ' + result);
    });
  }
}
