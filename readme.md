1) Open a command prompt in the project's root directory - ajs2-poc-rcb

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.

NOTE : If error with npm start , check the version of angular 2 in package.json -->  "angular2": "2.0.0-beta.9",
Git Repo commit instructions :

In the root directory,
git init
git commit -m "first commit"
git remote add origin https://github.com/RCBAN/angular2-poc-chaithanya.git

git push -u origin master

github cred
chaithanya.bangaru@gmail.com
a-----@--3

https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
--If you get an error like below :

 setting certificate verify locations:
  CAfile: C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
  CApath: none
-----

>git config --system http.sslverify false