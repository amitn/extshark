## ExtShark
simple web interface for tshark

### Install (tested on UBUNTU 16.04 with apache2, php7.0)
- make sure you have apache php and tshark installed and up to date. `sudo apt-get install apache2 tshark php7.0`
- clone repository onto your machine with <code>git clone https://github.com/brsc2909/extshark.git</code>
- navigate into directory with <code>cd extshark</code>
- run the install script as root <code>sudo ./INSTALL</code> or just <code>./INSTALL</code> if you are already root
- restart apache with <code>sudo service apache2 restart</code>
- you can check that it is installed correctly by going to [localhost/extshark](http://localhost/extshark) default username: admin passwor: password once you have everything working these should be changed by using <code>sudo htpasswd /etc/extshare/htpasswd.users admin</code> and then enter your new password. you can add a new user with the same command swapping admin for your username.  
(note: if you change the name of the alias then the command will be <br>
<code>sudo htpasswd /etc/<your new alias>/htpasswd.users admin</code>).

### Custom install
- if you want to call your application something else you can edit the "install.conf" file with any text editor and then change the variable <code>ALIAS</code> e.g <code>ALIAS='NewName'</code>
- to change the root directory edit <code>WEBROOT='/your/new/directory'</code> (note: do not put a "/" at the end of the path")
- to change the config directory where your password file is held edit <code>ETC='/your/new/configDir'</code>.

#### Configure tshark to run as non-root user
`sudo groupadd wireshark`<br>
`sudo usermod -a -G wireshark <user>`<br>
`sudo dpkg-reconfigure wireshark-common`
Type yes when asked.


