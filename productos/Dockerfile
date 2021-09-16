##########-Stage Run Project-###############################################
FROM nginx:1.17.1-alpine
COPY ./dist/productos /usr/share/nginx/html 
### [Dir] = directorio que conitiene los archivos generados por la
###         compilación, ubicado dentro de /dist    
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
##########################################################################
LABEL maintainer="fp" \
      name="user@fp.com" \
      description="Portal web [nombre del proyecto] " \
      com.evertecinc.version="1.0.0" \
      com.evertecinc.language="JavaScript, Typescript" \
      com.evertecinc.framework="angular 9+"
##########################################################################