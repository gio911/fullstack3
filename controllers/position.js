module.exports.getByCategoryId=function(req, res){
    res.status(200).json({
        retbycat:'true'
    })
}

module.exports.create=function(req, res){
    res.status(200).json({
        createpos:'true'
    })
}

module.exports.remove=function(req, res){
    res.status(200).json({
        patch:'true'
    })
}

module.exports.update=function(req, res){
    res.status(200).json({
       del:'true'
    })
    
}