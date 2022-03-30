module.exports={
    notFound(req,res,next){
        const err = new Error("Not Found")
        err.status = 404
        next(err)
    },
    catchAll(err, req,res,next){
        res.status(err.status || 500)
        res.json({err:err.message})
    }
}