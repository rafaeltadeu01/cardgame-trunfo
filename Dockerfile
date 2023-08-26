# Use uma imagem base do servidor web, por exemplo, nginx
FROM nginx:alpine

# Copie os arquivos da sua aplicação para o diretório raiz do servidor web
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY imagens /usr/share/nginx/html/imagens

# Exponha a porta 80 do container
EXPOSE 80

# Comando a ser executado quando o container for iniciado
CMD ["nginx", "-g", "daemon off;"]
