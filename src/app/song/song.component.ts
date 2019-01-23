import { Component, OnInit, Input } from '@angular/core';

import { Song } from '../song';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() songs: Song[];
  selectedSong;
  placeholderSong: Song = {name: "---", duration: "---"};
  selected: boolean = false;

  selectSong(song: Song) {
      if (this.selectedSong == song) {
        this.clearSong();
        return;
      }
      else {
        this.selectedSong = song;
        this.selected = true;
      }
  }

  getSelectedSong(): Song {
    return this.selectedSong;
  }

  clearSong() {
    this.selectedSong = this.placeholderSong;
    this.selected = false;
  }

  constructor() { }
  ngOnInit() {
    this.selectedSong = this.placeholderSong;
  }

}
