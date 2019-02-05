# Album Viewer

This is a personal test project, made to get more familiar with both TypeScript and [Angular CLI](https://github.com/angular/angular-cli).  
The current "end goal" is to have a dashboard with a list of albums, that can be sorted / filtered, and having a list of the album's songs show up when clicked. A song can then be clicked to display more information on the song (such as: writers, composers).  

### Stored data  
The data used in this project is stored in a MySQL database, which can be quickly setup by running [/src/db_setup.sql](https://github.com/tobias-albert/album-viewer/blob/phpsql/src/db_setup.sql).

### Data API  
As Angular can not communicate with MySQL, [/src/index.php](https://github.com/tobias-albert/album-viewer/blob/phpsql/src/index.php) hosts an API at `http://localhost:8080`.  
Php must be downloaded - http://no2.php.net/downloads.php.  

For the php script to be able to connect to sql db, you need to change the encryption of your password to the db by doing something like this:  `ALTER USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';`.  

### Running the project  
In the project folder, use `ng serve -o` to automatically launch the project at `http://localhost:4200`.  


### Project under construction  
The project is in no way close to being finished, and these instructions are in their current form not very complete. If you manage to stumble upon this project and are stuck trying to get it to run, please do not hesitate to ask! It probably means I have forgotten to include an important step.
