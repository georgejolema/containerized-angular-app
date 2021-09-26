# MyContainerizedApp

This project shows many features such as:

* Angular builds
* Environment configurations
* Communication between containers
* Proxy configuration
* docker builds

[Presentation] (https://docs.google.com/presentation/d/1AC4ID2w0GnS0fpIQg00tyim4gbA1u0Ei_OX3P2hqPsM/edit?usp=sharing)

## Running localy

1. Run `npm install` at the root of this project
2. Run `npm run build transactions` to build one of the dependencies
3. Run `npm run start` to run the application

## Run in a docker container in development mode

### Using dockerfile

1. Run `npm install` at the root of this project
2. Run `npm run build transactions` to build one of the dependencies
3. Run `npm run build --configuration=development`
4. Run `docker build -t nginx-angular .`
5. Run `docker run -p 8080:80 -v $(pwd)/dist/my-containerized-app:/usr/share/nginx/html nginx-angular`
6. Visit `http://localhost:8080`

### Run using docker-compose

1. Run `npm install` at the root of this project
2. Run `npm run build transactions` to build one of the dependencies
3. Run `npm run build --configuration=development`
4. Run `docker-compose build`
5. Run `docker-compose up`
6. Visit `http://localhost`

## Run in a docker container in production mode

1. Run `docker-compose -f docker-compose.prod.yml build`
2. Run `docker-compose -f docker-compose.prod.yml up`
3. Visit `http://localhost`
