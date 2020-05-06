<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository. 
<br>
[NodeJS 12+](https://nodejs.org) required.


## Installation

```bash
$ npm install
```

## Running the app

```bash

# general information
$ The app starts at localhost, on port:3000

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test the app functionality

```bash
In any browser, or postman, or some similar app:

    * http://localhost:3000/?text=aaabbaa&pattern=aabc -> no match found
    * http://localhost:3000/?text=aaabbaa&pattern=aab -> match found
    * http://localhost:3000/?text=aaabbaa&pattern= -> ERROR, empty pattern

```

## License

  Nest is [MIT licensed](LICENSE).
