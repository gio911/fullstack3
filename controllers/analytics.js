module.exports.overview=function(req, res){
    res.status(200).json({
        over:'true'
    })
}

module.exports.analytics=function(req, res){
    res.status(200).json({
        an:'true'
    })
}

