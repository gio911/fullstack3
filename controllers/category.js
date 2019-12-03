module.exports.getAll=function(req, res){
    res.status(200).json({
        category:'true'
    })
}

module.exports.getById=function(req, res){
    res.status(200).json({
        byId:'true'
    })
}

module.exports.remove=function(req, res){
    res.status(200).json({
        del:'true'
    })
}

module.exports.create = function(req, res){
    res.status(200).json({
        create:'true'
    })
}

module.exports.update = function(req, res){
    res.status(200).json({
        patch:'true'
    })
}