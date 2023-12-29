# Install project step by step from scratch

## Git

Git client we recommend [Git SCM](https://git-scm.com)

### Steps to clone:
Navigate to a folder you want to store the repository or
create a new one (eg.: Projects)

Configure git with your username and email:
```
git config --global user.name "YOUR_NAME"
git config --global user.email "YOUR_EMAIL"
```
### SSH
Create an SSH and connect it to Github to get the project with

> `ssh-keygen` is a tool to quickly create ssh keys

Move to the folder where it is located: 
- Linux/MacOs: ( ~/.ssh/id_rsa.pub )
- Windows ( /c/Users/*Your Username*/.ssh/id_rsa.pub)

Use this [Settings](https://github.com/settings/keys) to add
a new SSH key to your github profile

- Give a title to your SSH key (e.g.: "zmbh")
- Paste the key you copied from id_rsa.pub file

```
git clone git@github.com:mzoli95/zmbh.git
```

> Now you will able to clone your repository with ssh cloning

### HTTP

Alternatively, you can use https cloning as well but you have to give your username and password every time (using a browser that cache your login makes this process easier)
	 when you want to push something to the repository
		
> Select the "<> Code" button on zmbh repository and copy the path below HTTPS tab
> You can clone your repository with this command: 
```
git clone https://github.com/mzoli95/zmbh.git
```
### Node.JS
- Download or upgrade your [Node.js](https://nodejs.org/en) and install it

### Visual Studio
- Download or upgrade your Visual Studio Code (VSCode) from code.visualstudio.com and install it

## Requriements
- Install or update your Angular version if it's needed
	```
	npm install -g @angular/cli
	```
	- If it's needed you can update your npm as well with this command:
	```
	npm install -g npm@latest
	```
	
### Windows 
Windows users might face an issue such as:
	 	```	
		cannot be loaded because running scripts is disabled on this system.
		```

 Write this command into an admin powershell: 
 ```
 Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```	
	
- After installed the programs before I recommend you to restart your computer
### Developmient
- Open the zmbh repository
	 - Open VSCode:
		- Select "Open folder" and search the folder where you cloned your repository and open it
		-  Click to the "Terminal" tab and click to the "New Terminal" option
		- In the bottom of VSCode you will get a new terminal where you have to make sure you are in the correct folder path
- With `npm run start` you can start the project