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
    if (this.selected) {
      this.selected = false;
    }
    else {
      this.selectedSong = song;
      this.selectedSong.selected = true;
      this.selected = true;
    }
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
