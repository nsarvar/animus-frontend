# Frontend application for Animus

This is a front application build on Angular 4.3 freamework. 

## Features
- list of apartments created by users
- Create a new apartment record
- Modify the record
- Delete the record

Deletaion and modification is protected with token which is stored in the cookie generated on the server. Server sends the secure token to the client throught HTTP header and client stores that token on cookie of client's browser. When deletaion is invoked, that token is sent to the sever for validation. 

## Building

Run `./build.sh /base_path/` command. 

Copy generated `dist` folder to your web server folder and rename `dist` to `base_path` name. 
Navigate to `http://localhost/base_path`
