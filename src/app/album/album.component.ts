import { Component, OnInit } from '@angular/core';

import { Album } from '../album';

import { Song } from '../song';
import { SongComponent } from '../song/song.component';

import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  albums = ALBUMS;
  placeholderAlbum: Album = {name: "---", songs: [{name: "nope", duration: "none"}]};
  selectedAlbum;
  selected: boolean = false;

  show(): void {
    console.log('show works')
  }

  selectAlbum(album: Album) {
    this.selectedAlbum = album;
    this.selected = true;
  }

  clearAlbum() {
    this.selectedAlbum = this.placeholderAlbum;
    this.selected = false;
  }

  getSongs(): Song[] {
      return this.selectedAlbum.songs;
  }

  constructor() {
  }

  ngOnInit() {
    this.selectedAlbum = this.placeholderAlbum;
  }


}
