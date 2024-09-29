# Projeto-Intermedi-rio-backend


# Projeto Backend
# Aluno: joao daniel de liz
# Professor: ramon

# Ideia do Projeto:

o projeto le uma api de terceiro que tem um post, e comentarios, aonde voce pode pesquisar as postagens
e commentario dessa postagem ou todos os comentarios de todas as postagem


# Iniciar o Projeto:

va ate o diretorio do projeto, entre no terminal dele e digite "docker compose up"
depois abra o postman, (ou qualquer que consiga acessar essa url) e digite as seguintes URLS

# Rotas da Aplicacao

http://localhost:8080/post 

para acessar todos os post (metodo get)


http://localhost:8080/post

para Adicionar um post (metodo post, a api nao deixa salvar os dados em seu serviço, entao nao vai aparecer caso voce tente achar depois)


http://localhost:8080/sobre

rota sobre pedida pelo professor (metodo get)

http://localhost:8080/post/{numero do id}

para achar o post especifico com o numero da aquele id (metodo get)


http://localhost:8080/comments

para voce achar todos os comentarios de todos os post (metodo get)


http://localhost:8080/comments/{numero do id}

para voce achar o comentarios com o id  (metodo get)


http://localhost:8080/post/{numero do id}/comments

para voce achar o comentario todos os comentarios do post com tal id  (metodo get)



