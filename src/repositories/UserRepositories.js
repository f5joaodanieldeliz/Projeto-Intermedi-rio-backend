import axios from "axios"

class UserRepository {

    async getPost() {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
          return response.data
        } catch (error) {
            throw new Error('Requição invalida')
        }
    }

    async getPostId(data) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`);
          return response.data
        } catch (error) {
            throw new Error('Requição invalida')
        }
    }

    async getPostCommentsId(data) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/comments`);
          return response.data
        } catch (error) {
            throw new Error('Requição invalida')
        }
    }

    async getCommentsById(data) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${data}`);
          return response.data
        } catch (error) {
            throw new Error('Requição invalida')
        }
    }

    async getCommentsAll() {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
          return response.data
        } catch (error) {
            throw new Error('Requição invalida')
        }
    }

    async postPost(valor) {
        try {
            console.log(valor)
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: valor.title,
            body: valor.body,
            userId: valor.userId,
          });
          console.log(response.data);
          return response.data
        } catch (error) {
            throw new Error('Atribuição invalida')
        }
      }

}

export default new UserRepository()