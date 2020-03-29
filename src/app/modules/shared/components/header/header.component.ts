import { FormGroup, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { filter, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnDestroy {

  public showMenu = false;
  public showSearch = false;
  public form: FormGroup;
  private searchSubscription: Subscription;
  @Output() onQueryChange: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.form = new FormGroup({
      query: new FormControl('')
    });
    this.searchSubscription = this.form.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(({ query }) => {
      this.onQueryChange.emit(query);
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  public toggleShowMenu(): void {
    this.showMenu = !this.showMenu;
  }

  public toggleSearchInput(): void {
    this.showSearch = !this.showSearch;
  }



}
