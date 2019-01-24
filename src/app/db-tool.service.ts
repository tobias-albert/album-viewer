import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Artist } from './artist';
import { Album } from './album';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DbToolService {

    private baseUrl = "http://localhost:8080/";
    private albumUrl = this.baseUrl + "album/";
    private artistUrl = this.baseUrl + "artist/";


  addArtist (artist: Artist): Observable<any> {
    return this.http.post<any>(this.artistUrl, artist, httpOptions)
  }

  addAlbum (album: Album): Observable<any> {
    return this.http.post<any>(this.albumUrl, album, httpOptions)
  }

  constructor(
    private http: HttpClient
  ) { }


  getResults(resultType: string): Observable <any> {
    return this.http.get<any>(this.baseUrl + resultType + '/');
  }
}
