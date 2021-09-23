const models = require('../models');

exports.create =  async (req,res) => {
    try {
        
        var newArticle = {
            titre: req.body.titre,
            contenu: req.body.contenu,
            auteur: req.body.auteur,
            image: req.body.image
        };
        
        if(!newArticle) {
            throw new Error('A parameter is missing !');
        }
        console.log('=======')
        console.log(newArticle)
        
        models.Article.create(newArticle)
        .then(data => {
            res.status(200).json({ data });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the article !'
            });
        });
        
    } catch(err) {
        res.status(400).json({ message: 'Could not create this post !'});
    }
};

exports.getAll = async (req, res) => {
    try{
        var fields = req.query.fields;
        var order = req.query.order;

        var articles = await models.Article.findAll({
            order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
            attributes: fields != "*" && fields != null ? fields.split(",") : null,
        });
        if(!articles) {
            throw new Error('Nothing to fetch !');
        } else {
            res.status(200).json({ articles });
        };
    } catch (err) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        const getArticle = await models.Article.findOne({
            where: { id: req.params.id }
        });
        if(!getArticle) {
            throw new Error('Could not reach this article !');
        } else {
            var destroyArticle = await models.Article.destroy({
                where: { id: req.params.id }
            });
            if(!destroyArticle) {
                throw new Error('Could not delete this message !');
            } else {
                res.status(200).json({ message: 'Post has been deleted with success !'});
            }
        }
    } catch (err) {
        res.status(404).json({ error: error.message });
    }
};