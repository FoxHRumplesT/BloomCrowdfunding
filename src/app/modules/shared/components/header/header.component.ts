import { FormGroup, FormControl } from '@angular/forms';
import { Component, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

import { AppFacade } from '@app/app.facade';

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
  @Input() showSearcher = true;
  @Output() onQueryChange: EventEmitter<string> = new EventEmitter();
  public links = {
    main: 'https://www.bloomcrowdfunding.co/',
  };

  constructor(
    private appFacade: AppFacade
  ) {
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

  get hasUser$(): Observable<boolean> {
    return this.appFacade.user$.pipe(
      map(user => !!user)
    );
  }

}
