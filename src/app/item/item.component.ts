import { Component } from '@angular/core';
import { Item } from '../Models/item.model';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data: Item[]) => {
        this.dataSource = data;
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log("Completed fetching data.")
      }
    );
  }
}
