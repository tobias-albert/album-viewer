import { Component } from '@angular/core';

import { Album } from './album';
import { AlbumComponent } from './album/album.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demi-app';

  constructor() {

  }

  ngOnInit() {
  }
}
