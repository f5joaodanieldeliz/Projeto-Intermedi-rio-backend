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

## Rotas da Aplicacao

# http://localhost:8080/post 

para acessar todos os post (metodo get)

outPut
[
    {
        "userId": ...,
        "id": ...,
        "title": "...",
        "body": "..."
    },
]

# http://localhost:8080/post

para Adicionar um post (metodo post, a api nao deixa salvar os dados em seu serviço, entao nao vai aparecer caso voce tente achar depois)

input

  {
    "userId": 10,
    "title": "teste",
    "body": "teste foda"
  }

output

{
    "title": "teste",
    "body": "teste foda",
    "userId": 10,
    "id": 101
}

# http://localhost:8080/sobre

rota sobre pedida pelo professor (metodo get)

output
{
    "estudante": "joao daniel de liz",
    "projeto": "leitura de postagem"
}

# http://localhost:8080/post/{numero do id}

input 
http://localhost:8080/post/1

output
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

para achar o post especifico com o numero da aquele id (metodo get)


# http://localhost:8080/comments

para voce achar todos os comentarios de todos os post (metodo get)

output

[
    {
        "postId": ...,
        "id": ...,
        "name": "...",
        "email": "...",
        "body": "..."
    },
]


# http://localhost:8080/comments/{numero do id}

para voce achar o comentarios com o id  (metodo get)

input
ttp://localhost:8080/comments/1

output

{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}


# http://localhost:8080/post/{numero do id}/comments

para voce achar o comentario todos os comentarios do post com tal id  (metodo get)

input
http://localhost:8080/post/1/comments

output

[
    {
        "postId": 1,
        "id": ...,
        "name": "...",
        "email": "...",
        "body": "..."
    },
]



