# cardgame-trunfo
Projeto de um jogo de cartas do tipo trunfo

# Construir a imagem do Docker
docker build -t trunfo-server .

# Executar o container a partir da imagem criada
docker run -d -p 8080:80 trunfo-server

# Servidor do jogo de exemplo:
cardgamemakerbr/trunfo-server:1.0.0
