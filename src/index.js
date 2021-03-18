exports.renderIndex = (req, res) => {
    res.render("index");
}

exports.postData = (req, res) =>{
    console.log(req.body)
    res.render ("index", {
        delpost:req.body.fname
    });
}
