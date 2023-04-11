FROM httpd:2.4

COPY dist/whatshouldieat-frontend /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]

#FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY /dist/whatshouldieat-frontend /usr/share/nginx/html