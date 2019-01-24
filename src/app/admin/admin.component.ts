import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';

import { DbToolService } from '../db-tool.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  songs: number[];
  album: Album;
  albums: Album[];
  songNum: number;
  placeholderAlbum: Album = {name: "---", songs: [{name: "nope", duration: "none"}],
   artist: {name: '---', age: 0, country: '---'}, year: 0, image: '---'};

  anotherSong(): void {
    this.songs[this.songs.length] = 0;
    this.songNum = this.songs.length -1;
  }



  addAlbum(album: Album): void {
    this.dbTool.addAlbum(album)
      .subscribe(album => this.albums.push(album));
  }

  constructor(private dbTool: DbToolService) { }

  ngOnInit() {
    this.songNum = 0;
    this.songs = [0];
    this.album = this.placeholderAlbum;
  }

}
