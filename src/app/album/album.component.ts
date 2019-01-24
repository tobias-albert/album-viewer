import { Component, OnInit } from '@angular/core';

import { Album } from '../album';

import { Song } from '../song';
import { SongComponent } from '../song/song.component';

import { SongDetail } from '../song-detail';
import { SongDetailComponent } from '../song-detail/song-detail.component';

import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [SongComponent]
})

export class AlbumComponent implements OnInit {

  albums = ALBUMS;
  placeholderAlbum: Album = {name: "---", songs: [{name: "nope", duration: "none"}],
   artist: {name: '---', age: 0, country: '---'}, year: 0, image: '---'};
  selectedAlbum;
  selected: boolean = false;
  selectedSong;

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

  getSelectedSong(): Song {
    return this.sc.getSelectedSong();
  }

  constructor(private sc: SongComponent) {
  }

  ngOnInit() {
    this.selectedAlbum = this.placeholderAlbum;
    this.selectedSong = this.getSelectedSong();
  }


}
