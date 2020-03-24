import { Component, OnInit } from '@angular/core';

import { ExploreFacade } from './explore.facade';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.sass']
})
export class ExploreComponent implements OnInit {

  constructor(
    private exploreFacade: ExploreFacade
  ) { }

  ngOnInit() {
    this.exploreFacade.fetchProducts();
  }

}
