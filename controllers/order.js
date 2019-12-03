module.exports.getAll=function(req, res){
    res.status(200).json({
        getAll:'true'
    })
}

module.exports.create = function(req, res){
    res.status(200).json({
        create:'true'
    })
}