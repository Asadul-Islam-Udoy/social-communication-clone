exports.ErrorHandler=(thenk)=>(req,res,next)=>{
    return Promise.resolve(thenk(req,res,next)).catch(next)
}