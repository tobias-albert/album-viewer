This functions sort of as a guide for others to make a similar project, as well as
helping me remember what I've actually done to make everything work.  
##### Disclaimer: guide is under construction and far from complete.


## DigitalOcean MySQL database  



### Connecting to the server with SSH  
DigitalOcean provides you with a one-click launch of a direct terminal into your server, but this is not great in my opinion (at least not for me). Firstly, it is pretty slow and laggy compared to Windows Cmd. Secondly, it does not respond well to a Norwegian keyboard (which I am using). I have found no way of typing `;` (other than pasting it in) which is pretty impractical when you want to use the MySQL service on the server. As an alternative, you can connect directly to the server with SSH through the terminal on Windows.  
Simply type `ssh root@[server_address]`, and you will be prompted for a password. Type the root password for the server, hit enter, and you're in!

SSH should probably be used with SSH keys, but I have not yet looked into this. According to [this thread](https://serverfault.com/questions/241588/how-to-automate-ssh-login-with-password#answers) it seems easy enough.

## Angular components  
Taking a look at Angular's own [Tour of Heroes project](https://angular.io/tutorial) gives great insight into how Angular components work, and goes through most of what's needed by Angular and TypeScript in this project.  
After going through the tutorial one just needs to tweak their components to make them logical in terms of the project specifications.

## PHP API  
Installing PHP7: [this video](https://www.youtube.com/watch?v=iW0B9NTId2g) is in my opinion a great tutorial for quickly installing php on your computer.  

For setting up the API I used [this guide](https://www.techiediaries.com/php-angular/) as a basis \[Note: either I'm misremembering what guide I used or the guide has changed slightly from when I used it\].  

In `index.php`, it uses values found in a file `redacted.json`. This file is not added to the git repository as it compromises security on the remote database.
The file is very simple, and looks like this:  
```json
{
    "ip": "[ip_adress]",
    "username": "[username]",
    "password": "[password]"
}
```
