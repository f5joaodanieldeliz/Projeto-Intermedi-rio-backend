import  UserRepository  from "../repositories/UserRepositories.js"



class CreateUserService {

    async executeGetAllPost() {

        const userRepository =  UserRepository

        const ResultGet = userRepository.getPost()

        const valid = await ResultGet

        if(!valid){
            throw new Error("nao ha dados nessa requisicao")
        }
        
        return await ResultGet

    }

    async executeGetPostCommentById(data) {

        if(!data){
            throw new Error('Id nao informado em sua requisição')
        }

        if(data < 0){
            throw new Error('Id nao é valido')
        }

        const userRepository =  UserRepository

        const ResultGet = userRepository.getPostCommentsId(data)
        
        return await ResultGet

    }

    async executeGetCommentsById(data) {

        if(!data){
            throw new Error('Id nao informado em sua requisição')
        }

        if(data < 0){
            throw new Error('Id nao é valido')
        }

        const userRepository =  UserRepository

        const ResultGet = userRepository.getCommentsById(data)
        
        return await ResultGet

    }

    async executeGetAllComments() {

        const userRepository =  UserRepository

        const ResultGet = userRepository.getCommentsAll()

        const valid = await ResultGet

        if(!valid){
            throw new Error("nao ha dados nessa requisicao")
        }
        
        return await ResultGet

    }

    async executePostPost(data) {

        if(!data.title || !data.body || !data.userId) {
            throw new Error('algum dado esta faltando') 
        }

        const userRepository =  UserRepository

        const resultPost = userRepository.postPost(data)


        return await resultPost
    }


    async executeGetPostById(data) {

        if(!data){
            throw new Error('Id nao informado em sua requisição')
        }

        if(data < 0){
            throw new Error('Id nao é valido')
        }

        const userRepository =  UserRepository

        const ResultGet = userRepository.getPostId(data)
        
        return await ResultGet

    }
    
}


export {CreateUserService}