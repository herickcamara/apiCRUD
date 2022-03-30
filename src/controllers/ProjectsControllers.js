
const knex = require('../database');

module.exports={
   async getMyProjects(req,res,next){
    try {
        const {user_id} =req.query;

        const query = knex('projects')
           
        if (user_id) {
           query
           .where({ user_id })
             .join('users','users.id', '=','projects.user_id')
             .select('projects.*','users.username')
        }else{
            query
            .join('users','users.id', '=','projects.user_id')
            .select('projects.*','users.username')
        }

       const results = await query
       return res.json({results})
        
    } catch (err) {
        next(err)
    }
},
    async createNewProject(req,res,next){
        try {
            const {title, description, dev_time} = req.body
            const {user_id} = req.query
            const id = req.params.id

           if(id){
               await knex('projects')
               .update({
                title, description, dev_time
               })
               .where({id})
               return res.status(201).send()

           }

            await knex('projects').insert({
            title, description, dev_time, user_id
            })
            
            return res.status(201).send() 
        } catch (error) {
            next(error)
        }
    },
    async dele(req,res,next){
        try {
         
            const id= req.params.id

            await knex('projects')
            .where({id})
            .del()
            
            return res.send()
        } catch (error) {
            next(error)
        }
    }
}