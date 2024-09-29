import { CreateUserService } from "../service/createUserSevice.js"


class UserController {

    async sobre(request, response){

        try {            
            return response.json({
                estudante: "joao daniel de liz",
                projeto: "leitura de postagem"
            })
        } catch (error) {
            return response.status(400).json({
                err: error.message
            })
            
        }

    }

    async handleGetById(request, response){
        const {id} = request.params

        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executeGetPostById(id)
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
            
        }
    }

    async GetPostCommentById(request, response){
        const {id} = request.params

        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executeGetPostCommentById(id)
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
            
        }
    }

    async handleCommentsById(request, response){
        const {id} = request.params

        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executeGetCommentsById(id)
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
            
        }
    }

    async handleGetAllComments(request, response){
        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executeGetAllComments()
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
        }
    }

    async handleGetAll(request, response){
        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executeGetAllPost()
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
        }
    }

    async handlePost(request, response){
        const {body} = request

        try {
         const createuserservice = new CreateUserService()
         const result = createuserservice.executePostPost(body)
         return response.json(await result)
        } catch (error) { 
            return response.status(400).json({
                err: error.message
            })
            
        }

    }
}


export {UserController}