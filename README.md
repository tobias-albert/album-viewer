# Album Viewer

This is a personal test project, made to get more familiar with both TypeScript and [Angular CLI](https://github.com/angular/angular-cli).  
The current "end goal" is to have a dashboard with a list of albums, that can be sorted / filtered, and having a list of the album's songs show up when clicked. A song can then be clicked to display more information on the song (such as: writers, composers).  

### Stored data  
The data used in this project is stored in a MySQL database, which can be quickly setup by running [/src/db_setup.sql](https://github.com/tobias-albert/album-viewer/blob/phpsql/src/db_setup.sql).  
*Note: Current master branch still uses file "mock-albums.ts" to collect album data in a json format*

### Data API  
As Angular can not communicate with MySQL, [/src/index.php](https://github.com/tobias-albert/album-viewer/blob/phpsql/src/index.php) hosts an API at `http://localhost:8080`.  
Php must be downloaded - http://no2.php.net/downloads.php.

### Running the project  
In the project folder, use `ng serve -o` to automatically launch the project at `http://localhost:4200`.
