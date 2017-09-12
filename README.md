# Frontend application for Animus

This is a front application build on Angular 4.3 freamework. 

## Features
- list of apartments created by users
- Create a new apartment record
- Modify the record
- Delete the record

Deletaion and modification is protected with token which is stored in the cookie generated on the server. Server sends the secure token to the client throught HTTP header and client stores that token on cookie of client's browser. When deletaion is invoked, that token is sent to the sever for validation. 

## Building

Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
