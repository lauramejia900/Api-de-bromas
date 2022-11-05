const ChisteController = require("../controllers/chistes.controler");

module.exports = app => {
    app.get("/api/chistes/", ChisteController.muestraEChistes);
    app.get("/api/chistes/:id", ChisteController.muestraUnChiste);
    app.post("/api/chistes/new",ChisteController.creaChiste );
    app.put("/api/chistes/update/:id", ChisteController.actualizaChiste );
    app.delete("/api/chistes/delete/:id", ChisteController.borrarChiste );
};