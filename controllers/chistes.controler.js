//Aqui van las acciones a realizar 
const Chiste = require("../models/chiste.model");

//Regresa lista de objetos/documentos Estudiante
module.exports.muestraEChistes = (req, res) => {
    Chiste.find()
        .then(todosChistes => res.json({Chistes: todosChistes}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

module.exports.muestraUnChiste = (req, res) => {
    Chiste.findOne({_id: req.params.id})
        .then(UnChiste => res.json({Chistes: UnChiste}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
};

module.exports.creaChiste = (req, res) => {
    Chiste.create(req.body)
        .then(nuevoChiste => res.json({chistes: nuevoChiste}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
}

module.exports.actualizaChiste = (req, res) => {
    Chiste.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(chisteActualizado => res.json({chistes: chisteActualizado}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
}

module.exports.borrarChiste = (req, res) => {
    Chiste.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Algo salió mal", error: err}))
}