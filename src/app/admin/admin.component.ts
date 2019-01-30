import { Component, OnInit, Input } from '@angular/core';

import { Album } from '../album';
import { AlbumComponent } from '../album/album.component';

import { DbToolService } from '../db-tool.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  album: Album;
  albums: Album[];
  songNum: number;
  placeholderAlbum: Album = {name: "---", songs: [{name: "nope", duration: "none"}],
   artist: {name: '---', age: 0, country: '---'}, year: 0, image: '---'};
   otherAlbum: Album;

  anotherSong(): void {
    this.songNum++;
    this.album.songs[this.songNum -1] = {name: "d", duration: "d"};
    //this.amountOfSongs[this.amountOfSongs.length] = this.songNum;
  }


  submit() {
    this.otherAlbum = this.album;
    this.addAlbum(this.album);
  }

  getAlbums() {
      this.dbTool.getResults('album')
        .subscribe(albums => this.albums = albums);
  }

  addAlbum(newAlbum: Album): void {
    //this.getAlbums();
    this.dbTool.addAlbum(newAlbum)
      .subscribe(album => this.albums.push(album));
    console.log("??")
  }

  constructor(private dbTool: DbToolService) { }

  ngOnInit() {
    this.songNum = 1;
    this.album = this.placeholderAlbum;
    this.otherAlbum = this.placeholderAlbum;
  }

}
