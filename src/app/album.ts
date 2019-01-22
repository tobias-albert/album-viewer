import { Artist } from './artist';
import { Song } from './song';

export class Album {
  name: string;
  artist: Artist;
  year: number;
  image: string;
  songs: Song[];
}
