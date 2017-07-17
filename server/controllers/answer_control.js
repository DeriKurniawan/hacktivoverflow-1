const Answer = require('../models/answers');
var models = {};

models.getAllItems = function(req, res){
    Answer.find({})
    .populate('author')
    .exec((err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'terjadi kesalahan database, tidak bisa memuat data Answers',
                error: err
            })
        } else {
            res.status(200)
            .send({
                msg: 'Berhasil mendapatkan data Answers',
                data: result
            })
        }
    })
}

models.getOneItem = function(req, res){
    let id = req.params.id
    Answer.findById(id)
    .populate('author')
    .exec((err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'terjadi kesalahan database, tidak bisa menemukkan data Answers',
                error: err
            })
        } else {
            res.status(200)
            .send({
                msg: 'Berhasil mendapatkan data Answers',
                data: result
            })
        }
    })
}

models.createAnswer = function(req, res){
    let content = req.body.content,
        author = req.body.author,
        like = [];
    Answer.create({
        content: content,
        author: author,
        like: like
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'terjadi kesalahan database, tidak bisa memasukan data Answers',
                error: err
            })
        } else {
            res.status(200)
            .send({
                msg: 'Berhasil memasukkan data Answers',
                data: result
            })
        }
    })
}

models.deleteItem = function(req, res){
    let id = req.params.id;
    Answer.findByIdAndRemove(id, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menghapus Answer',
                error: err
            })
        } else {
            res.send({
                message: 'Berhasil menghapus Answer',
                data: result
            })
        }
    })
}

models.addLikes = function(req, res){
    let id = req.params.id,
        like = req.body.likeId;
    Answer.findByIdAndUpdate(id, {
        $push: { like: like }
    }, {
        safe: true,
        upsert: true,
        new: true
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menambah like',
                error: err
            })
        } else {
            res.send({
                message: 'Berhasil menambahkan like',
                data: result
            })
        }
    })
}

models.removeLikes = function(req, res){
    let id = req.params.id,
        like = req.body.like;
    Answer.findByIdAndUpdate(id, {
        $pull: { like: like }
    }, {
        safe: true,
        upsert: true
    }, (err, result)=>{
        if(err){
            res.status(400)
            .send({
                message: 'Kesalahan, tidak bisa menambah like',
                error: err
            })
        } else {
            res.send({
                message: 'Berhasil menghapus like',
                data: result
            })
        }
    })
}

module.exports = models;