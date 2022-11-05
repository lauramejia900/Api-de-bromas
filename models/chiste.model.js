const mongoose = require("mongoose");

const EsquemaChiste = new mongoose.Schema({
    setup: {
        type: String,
        minlenght: [10, "Este campo debe tener al menos 10 caracteres"]
    },
    
    punchine: {
        type: String,
        minlenght: [3, "Este campo debe tener al menos 3 caracteres"]
    }
}, { timestamps: true, versionKey: false});
//Timestamps:true -> crea los campos de createdAt y updatedAt
//versionKey:false -> elimina el atributo _v

const Chiste = mongoose.model("chistes", EsquemaChiste);

module.exports = Chiste;