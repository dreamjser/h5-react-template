FROM nginx

COPY --from=0 dist /usr/share/nginx/html/

COPY --from=0 /apps/deploy/default.conf /etc/nginx/conf.d/default.conf
