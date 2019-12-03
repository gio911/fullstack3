module.exports.login=function (req, res){
    res.status(200).json({
    login:'good'
    })
}

 module.exports.register = function(req, res){
     res.status(200).json({
         registered:'true'
     })
 }