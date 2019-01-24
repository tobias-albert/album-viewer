import { Component, OnInit } from '@angular/core';

import { Album } from '../album';

import { Song } from '../song';
import { SongComponent } from '../song/song.component';

import { SongDetail } from '../song-detail';
import { SongDetailComponent } from '../song-detail/song-detail.component';

import { DbToolService } from '../db-tool.service';

//import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css', '../shared.style.css'],
  providers: [SongComponent]
})


export class AlbumComponent implements OnInit {

  //albums = ALBUMS;
  albums: Album[];
  placeholderAlbum: Album = {name: "---", songs: [{name: "nope", duration: "none"}],
   artist: {name: '---', age: 0, country: '---'}, year: 0, image: '---'};
  selectedAlbum;
  selected: boolean = false;
  selectedSong;
  imgSrc: string = "../assets/albums/"

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

  getResults(): void {
    this.dbTool.getResults('album')
      .subscribe(albums => this.albums = albums);
  }

  addAlbum(album: Album): void {
    this.dbTool.addAlbum(album)
      .subscribe(album => this.albums.push(album));
  }

  constructor(
    private sc: SongComponent,
    private dbTool: DbToolService
  ) {
  }

  ngOnInit() {
    this.getResults();
    this.selectedAlbum = this.placeholderAlbum;
    this.selectedSong = this.getSelectedSong();
  }


}
