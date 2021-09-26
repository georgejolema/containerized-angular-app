FROM nginx:alpine
COPY ./config/nginx.dev.conf /etc/nginx/conf.d/default.conf

# build with `ng build --configuration=development`
# docker build -t nginx-angular .
# docker run -p 8080:80 -v $(pwd)/dist/my-containerized-app:/usr/share/nginx/html nginx-angular
